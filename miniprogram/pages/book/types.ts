
interface bookItemData {
  author: string;
  callNo: string;
  docTypeName: string;
  isbn: string;
  marcRecNo: string;
  num: number;
  pubYear: string;
  publisher: string;
  title: string;
  coverImg?: string;
  avaliable?: string;
  total?: string;
}

interface searchResultObjectType {
  total: number;
  cost: number;
  content: bookItemData[];
}

interface searchFuncResultObject {
  success: boolean;
  data: searchResultObjectType;
}
