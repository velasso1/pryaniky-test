export interface ITableData {
  id: string;
  companySigDate: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSigDate: string;
  employeeSignatureName: string;
}

export interface IError {
  errorCode: string;
  errorMessage: string;
}

export interface ITableItems {
  tableItems: ITableData[];
  error: IError;
}

export interface IReqestedDataTable {
  error_code: string;
  error_message: string;
  data: ITableData[];
  profiling: string;
  timings: string;
}
