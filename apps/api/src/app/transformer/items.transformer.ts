import {
  ISearch,
  Search,
  Result,
  Item,
  AvailableFilterValue,
  FilterValue,
  Filter,
  PathFromRoot,
} from '@meli/api-interfaces';
import { transformPrice, author } from './shared.transformer';

const transformItem = ({
  id,
  title,
  currency_id,
  price,
  thumbnail,
  condition,
  shipping: { free_shipping },
  address: { state_name: state },
}: Result): Item => ({
  id,
  title,
  price: transformPrice(currency_id, price),
  picture: thumbnail,
  condition,
  free_shipping,
  state,
});

const findCategoryFilter = <T extends AvailableFilterValue | FilterValue>(
  filters: Filter<T>[]
) => filters.find((filter) => filter.id === 'category')?.values;

const transformCategories = (
  availableFilterValues: AvailableFilterValue[],
  filterValues: PathFromRoot[]
) => {
  let categories = [];

  if (filterValues) {
    const filterValueNames = filterValues.map((value) => value.name);

    categories = [...categories, ...filterValueNames];
  }

  if (availableFilterValues) {
    const availableFilterValueName = availableFilterValues?.reduce(
      (max, category) => (category.results > max.results ? category : max),
      { name: '', results: 0 } as AvailableFilterValue
    ).name;

    categories = [...categories, availableFilterValueName];
  }
  return categories;
};

export const transformItems = ({
  available_filters,
  filters,
  results,
}: ISearch): Search => {
  const availableFiltervalues = findCategoryFilter(available_filters);
  const filtervalues = findCategoryFilter(filters);

  return {
    author,
    categories: transformCategories(availableFiltervalues, filtervalues),
    items: results.map((result) => transformItem(result)),
  };
};
