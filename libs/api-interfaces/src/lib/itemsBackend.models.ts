import { Base, PathFromRoot } from './shared.models';

export interface ISearch {
  site_id: SiteID;
  query: string;
  paging: Paging;
  results: Result[];
  secondary_results: any[];
  related_results: any[];
  sort: Sort;
  available_sorts: Sort[];
  filters: Filter<FilterValue>[];
  available_filters: Filter<AvailableFilterValue>[];
}

export interface Filter<T> extends Base {
  type: string;
  values: T[];
}

export interface FilterValue extends Base {
  path_from_root: PathFromRoot[];
}

export interface AvailableFilterValue extends Base {
  results: number;
}

export interface Sort extends Base {}

export interface Paging {
  total: number;
  offset: number;
  limit: number;
  primary_results: number;
}

export interface Result {
  id: string;
  site_id: SiteID;
  title: string;
  seller: Seller;
  price: number;
  currency_id: CurrencyID;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: BuyingMode;
  listing_type_id: ListingTypeID;
  stop_time: Date;
  condition: Condition;
  permalink: string;
  thumbnail: string;
  accepts_mercadopago: boolean;
  installments: Installments;
  address: Address;
  shipping: Shipping;
  seller_address: SellerAddress;
  attributes: Attribute[];
  original_price: number | null;
  category_id: string;
  official_store_id: number | null;
  domain_id: string;
  catalog_product_id: null | string;
  tags: ResultTag[];
  catalog_listing?: boolean;
}

export interface IItemDetail extends Result {
  subtitle: any;
  seller_id: number;
  base_price: number;
  initial_quantity: number;
  sale_terms: any[];
  start_time: Date;
  secure_thumbnail: string;
  pictures: Picture[];
  video_id: any;
  descriptions: Description[];
  non_mercado_pago_payment_methods: NonMercadoPagoPaymentMethod[];
  international_delivery_mode: string;
  seller_contact: any;
  location: Location;
  geolocation: Geolocation;
  coverage_areas: any[];
  warnings: any[];
  listing_source: string;
  variations: Variation[];
  status: string;
  sub_status: any[];
  warranty: string;
  parent_item_id: string;
  differential_pricing: any;
  deal_ids: any[];
  automatic_relist: boolean;
  date_created: Date;
  last_updated: Date;
  health: number;
}

export interface IDescription {
  text: string;
  plain_text: string;
  last_updated: Date;
  date_created: Date;
  snapshot: Snapshot;
}

export interface Snapshot {
  url: string;
  width: number;
  height: number;
  status: string;
}

export interface Description {
  id: string;
}

export interface NonMercadoPagoPaymentMethod {
  id: string;
  description: string;
  type: string;
}

export interface Picture {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}

export interface Variation {
  id: number;
  price: number;
  attribute_combinations: AttributeCombination[];
  available_quantity: number;
  sold_quantity: number;
  sale_terms: any[];
  picture_ids: string[];
  catalog_product_id: any;
}

export interface AttributeCombination extends Base {
  value_id: string;
  value_name: string;
  value_struct: any;
  values: Value[];
}

export interface Value extends Base {
  struct: any;
}

export interface Address {
  state_id: StateID;
  state_name: StateName;
  city_id: null | string;
  city_name: string;
}

export interface Attribute {
  name: Name;
  value_name: null | string;
  attribute_group_name: AttributeGroupName;
  attribute_group_id: AttributeGroupID;
  source: number;
  id: ID;
  value_id: null | string;
  value_struct: any;
  values: AttributeValue[];
}

export interface AttributeValue extends Base {
  struct: any;
  source: number;
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: CurrencyID;
}

export interface Seller {
  id: number;
  permalink: string;
  registration_date: Date;
  car_dealer: boolean;
  real_estate_agency: boolean;
  tags: SellerTag[];
  seller_reputation: SellerReputation;
  eshop?: Eshop;
}

export interface Eshop {
  nick_name: string;
  eshop_rubro: EshopRubro | null;
  eshop_id: number;
  eshop_locations: EshopLocation[];
  site_id: SiteID;
  eshop_logo_url: string;
  eshop_status_id: number;
  seller: number;
  eshop_experience: number;
}

export interface EshopLocation {
  state: City;
  neighborhood: City;
  country: City;
  city: City;
}

export interface City {
  id: null | string;
}

export interface EshopRubro extends Base {
  category_id: string;
}

export interface SellerReputation {
  transactions: Transactions;
  power_seller_status: PowerSellerStatus;
  metrics: Metrics;
  level_id: LevelID;
  protection_end_date?: Date;
  real_level?: string;
}

export interface Metrics {
  claims: Cancellations;
  delayed_handling_time: Cancellations;
  sales: Sales;
  cancellations: Cancellations;
}

export interface Cancellations {
  rate: number;
  value: number;
  period: CancellationsPeriod;
  excluded?: Excluded;
}

export interface Excluded {
  real_rate: number;
  real_value: number;
}

export interface Sales {
  period: CancellationsPeriod;
  completed: number;
}

export interface Transactions {
  total: number;
  canceled: number;
  period: TransactionsPeriod;
  ratings: Ratings;
  completed: number;
}

export interface Ratings {
  negative: number;
  positive: number;
  neutral: number;
}

export interface SellerAddress {
  id: string;
  comment: string;
  address_line: string;
  zip_code: string;
  country: Sort;
  state: Sort;
  city: Sort;
  latitude: string;
  longitude: string;
}

export interface Shipping {
  free_shipping: boolean;
  mode: Mode;
  tags: ShippingTag[];
  logistic_type: LogisticType;
  store_pick_up: boolean;
}

export enum LogisticType {
  CROSSDOCKING = 'cross_docking',
  CUSTOM = 'custom',
  FULFILLMENT = 'fulfillment',
  XDDROPOFF = 'xd_drop_off',
}

export enum Mode {
  CUSTOM = 'custom',
  ME2 = 'me2',
}

export enum ShippingTag {
  FBMINPROCESS = 'fbm_in_process',
  FULFILLMENT = 'fulfillment',
  MANDATORYFREESHIPPING = 'mandatory_free_shipping',
  SELFSERVICEIN = 'self_service_in',
  SELFSERVICEOUT = 'self_service_out',
}

export enum ResultTag {
  BRANDVERIFIED = 'brand_verified',
  CARTELIGIBLE = 'cart_eligible',
  DRAGGEDBIDSANDVISITS = 'dragged_bids_and_visits',
  GOODQUALITYPICTURE = 'good_quality_picture',
  GOODQUALITYTHUMBNAIL = 'good_quality_thumbnail',
  IMMEDIATEPAYMENT = 'immediate_payment',
  LOYALTYDISCOUNTELIGIBLE = 'loyalty_discount_eligible',
  SHIPPINGGUARANTEED = 'shipping_guaranteed',
}

export enum SellerTag {
  BRAND = 'brand',
  CREDITSPRIORITY1 = 'credits_priority_1',
  CREDITSPRIORITY3 = 'credits_priority_3',
  CREDITSPRIORITY4 = 'credits_priority_4',
  CREDITSPROFILE = 'credits_profile',
  ESHOP = 'eshop',
  LARGESELLER = 'large_seller',
  MEDIUMSELLER = 'medium_seller',
  MEDIUMSELLERADVANCED = 'medium_seller_advanced',
  MESSAGESASBUYER = 'messages_as_buyer',
  MESSAGESASSELLER = 'messages_as_seller',
  MSHOPS = 'mshops',
  NORMAL = 'normal',
  USERINFOVERIFIED = 'user_info_verified',
}

export enum PowerSellerStatus {
  GOLD = 'gold',
  PLATINUM = 'platinum',
}

export enum TransactionsPeriod {
  HISTORIC = 'historic',
}

export enum CancellationsPeriod {
  THE3MONTHS = '3 months',
}

export enum LevelID {
  THE5_GREEN = '5_green',
}

export enum ListingTypeID {
  GOLDSPECIAL = 'gold_special',
}

export enum BuyingMode {
  BUYITNOW = 'buy_it_now',
}

export enum Condition {
  NEW = 'new',
}

export enum CurrencyID {
  ARS = 'ARS',
}

export enum AttributeGroupID {
  OTHERS = 'OTHERS',
}

export enum AttributeGroupName {
  OTROS = 'Otros',
}

export enum SiteID {
  MLA = 'MLA',
}

export enum ID {
  BRAND = 'BRAND',
  DETAILEDMODEL = 'DETAILED_MODEL',
  ITEMCONDITION = 'ITEM_CONDITION',
  LINE = 'LINE',
  MODEL = 'MODEL',
}

export enum Name {
  CONDICIÓNDELÍTEM = 'Condición del ítem',
  LÍNEA = 'Línea',
  MARCA = 'Marca',
  MODELO = 'Modelo',
  MODELODETALLADO = 'Modelo detallado',
}

export enum StateID {
  ARB = 'AR-B',
  ARC = 'AR-C',
}

export enum StateName {
  BUENOSAIRES = 'Buenos Aires',
  CAPITALFEDERAL = 'Capital Federal',
}
