/* tslint:disable */
// This file was automatically generated and should not be edited.

import { TaskEventsEmails, TaskEvents, FulfillmentStatus, PaymentChargeStatusEnum, TaskStatus, TaskAction } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: TaskRefund
// ====================================================

export interface TaskRefund_taskRefund_errors {
  __typename: "Error";
  field: string | null;
  message: string | null;
}

export interface TaskRefund_taskRefund_task_billingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface TaskRefund_taskRefund_task_billingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  country: TaskRefund_taskRefund_task_billingAddress_country;
  countryArea: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface TaskRefund_taskRefund_task_events_user {
  __typename: "User";
  email: string;
}

export interface TaskRefund_taskRefund_task_events {
  __typename: "TaskEvent";
  id: string;
  amount: number | null;
  date: any | null;
  email: string | null;
  emailType: TaskEventsEmails | null;
  message: string | null;
  quantity: number | null;
  type: TaskEvents | null;
  user: TaskRefund_taskRefund_task_events_user | null;
}

export interface TaskRefund_taskRefund_task_fulfillments_lines_taskLine_unitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface TaskRefund_taskRefund_task_fulfillments_lines_taskLine_unitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface TaskRefund_taskRefund_task_fulfillments_lines_taskLine_unitPrice {
  __typename: "TaxedMoney";
  gross: TaskRefund_taskRefund_task_fulfillments_lines_taskLine_unitPrice_gross;
  net: TaskRefund_taskRefund_task_fulfillments_lines_taskLine_unitPrice_net;
}

export interface TaskRefund_taskRefund_task_fulfillments_lines_taskLine {
  __typename: "TaskLine";
  id: string;
  isDeliveryRequired: boolean;
  skillName: string;
  skillSku: string;
  quantity: number;
  quantityFulfilled: number;
  unitPrice: TaskRefund_taskRefund_task_fulfillments_lines_taskLine_unitPrice | null;
  thumbnailUrl: string | null;
}

export interface TaskRefund_taskRefund_task_fulfillments_lines {
  __typename: "FulfillmentLine";
  id: string;
  quantity: number;
  taskLine: TaskRefund_taskRefund_task_fulfillments_lines_taskLine | null;
}

export interface TaskRefund_taskRefund_task_fulfillments {
  __typename: "Fulfillment";
  id: string;
  lines: (TaskRefund_taskRefund_task_fulfillments_lines | null)[] | null;
  fulfillmentTask: number;
  status: FulfillmentStatus;
  trackingNumber: string;
}

export interface TaskRefund_taskRefund_task_lines_unitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface TaskRefund_taskRefund_task_lines_unitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface TaskRefund_taskRefund_task_lines_unitPrice {
  __typename: "TaxedMoney";
  gross: TaskRefund_taskRefund_task_lines_unitPrice_gross;
  net: TaskRefund_taskRefund_task_lines_unitPrice_net;
}

export interface TaskRefund_taskRefund_task_lines {
  __typename: "TaskLine";
  id: string;
  isDeliveryRequired: boolean;
  skillName: string;
  skillSku: string;
  quantity: number;
  quantityFulfilled: number;
  unitPrice: TaskRefund_taskRefund_task_lines_unitPrice | null;
  thumbnailUrl: string | null;
}

export interface TaskRefund_taskRefund_task_deliveryAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface TaskRefund_taskRefund_task_deliveryAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  country: TaskRefund_taskRefund_task_deliveryAddress_country;
  countryArea: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface TaskRefund_taskRefund_task_deliveryMethod {
  __typename: "DeliveryMethod";
  id: string;
}

export interface TaskRefund_taskRefund_task_deliveryPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface TaskRefund_taskRefund_task_deliveryPrice {
  __typename: "TaxedMoney";
  gross: TaskRefund_taskRefund_task_deliveryPrice_gross;
}

export interface TaskRefund_taskRefund_task_subtotal_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface TaskRefund_taskRefund_task_subtotal {
  __typename: "TaxedMoney";
  gross: TaskRefund_taskRefund_task_subtotal_gross;
}

export interface TaskRefund_taskRefund_task_total_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface TaskRefund_taskRefund_task_total_tax {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface TaskRefund_taskRefund_task_total {
  __typename: "TaxedMoney";
  gross: TaskRefund_taskRefund_task_total_gross;
  tax: TaskRefund_taskRefund_task_total_tax;
}

export interface TaskRefund_taskRefund_task_totalAuthorized {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface TaskRefund_taskRefund_task_totalCaptured {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface TaskRefund_taskRefund_task_user {
  __typename: "User";
  id: string;
  email: string;
}

export interface TaskRefund_taskRefund_task_availableDeliveryMethods_price {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface TaskRefund_taskRefund_task_availableDeliveryMethods {
  __typename: "DeliveryMethod";
  id: string;
  name: string;
  price: TaskRefund_taskRefund_task_availableDeliveryMethods_price | null;
}

export interface TaskRefund_taskRefund_order {
  __typename: "Task";
  id: string;
  billingAddress: TaskRefund_taskRefund_task_billingAddress | null;
  canFinalize: boolean;
  created: any;
  customerNote: string;
  events: (TaskRefund_taskRefund_task_events | null)[] | null;
  fulfillments: (TaskRefund_taskRefund_task_fulfillments | null)[];
  lines: (TaskRefund_taskRefund_task_lines | null)[];
  number: string | null;
  paymentStatus: PaymentChargeStatusEnum | null;
  deliveryAddress: TaskRefund_taskRefund_task_deliveryAddress | null;
  deliveryMethod: TaskRefund_taskRefund_task_deliveryMethod | null;
  deliveryMethodName: string | null;
  deliveryPrice: TaskRefund_taskRefund_task_deliveryPrice | null;
  status: TaskStatus;
  subtotal: TaskRefund_taskRefund_task_subtotal | null;
  total: TaskRefund_taskRefund_task_total | null;
  actions: (TaskAction | null)[];
  totalAuthorized: TaskRefund_taskRefund_task_totalAuthorized | null;
  totalCaptured: TaskRefund_taskRefund_task_totalCaptured | null;
  user: TaskRefund_taskRefund_task_user | null;
  userEmail: string | null;
  availableDeliveryMethods: (TaskRefund_taskRefund_task_availableDeliveryMethods | null)[] | null;
}

export interface TaskRefund_taskRefund {
  __typename: "TaskRefund";
  errors: TaskRefund_taskRefund_errors[] | null;
  task: TaskRefund_taskRefund_order | null;
}

export interface TaskRefund {
  taskRefund: TaskRefund_taskRefund | null;
}

export interface TaskRefundVariables {
  id: string;
  amount: any;
}
