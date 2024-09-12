export interface ITableData {
  companySigDate: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSigDate: string;
  employeeSignatureName: string;
}

export interface ITableItems {
  tableItems: ITableData[];
}

export interface IReqestedDataTable {
  error_code: string;
  error_message: string;
  data: ITableData[];
  profiling: string;
  timings: string;
}
