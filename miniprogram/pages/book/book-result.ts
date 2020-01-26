
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

const initialSearchResultT = {"total":15,"cost":0.172,"content":[{"author":"(日)东野圭吾著","callNo":"","docTypeName":"中文图书","isbn":"978-7-5442-4169-4","marcRecNo":"414c6a4972333139347a565077526874796a38786a513d3d","num":1,"pubYear":"2008.09","publisher":"南海出版公司","title":"嫌疑人X的献身"},{"author":"(日) 东野圭吾著","callNo":"I313.45/D648-53","docTypeName":"中文图书","isbn":"978-7-5448-3396-7","marcRecNo":"59706c3553626365746c6b416c6f7161502b703959513d3d","num":2,"pubYear":"2014","publisher":"接力出版社","title":"圣女的救赎:《嫌疑人X的献身》续集"},{"author":"(日) 东野圭吾著","callNo":"I313.45/D648-4/2D","docTypeName":"中文图书","isbn":"978-7-5442-6761-8","marcRecNo":"5a45705539345a375946666d36636338577576735a413d3d","num":3,"pubYear":"2014","publisher":"南海出版公司","title":"嫌疑人X的献身.第2版"},{"author":"(日) 东野圭吾著","callNo":"I313.45/D648-4","docTypeName":"中文图书","isbn":"978-7-5442-4169-4","marcRecNo":"365a2b3266436f717a57724235343543454f36484a773d3d","num":4,"pubYear":"2008","publisher":"南海出版社","title":"嫌疑人X的献身"},{"author":"(日) 东野圭吾著","callNo":"I313.45/D648-2NH, I313.45/D648-4:1","docTypeName":"中文图书","isbn":"978-7-5442-4169-4","marcRecNo":"555967724e6268305a4c6b57572f5358344c364a7a513d3d","num":5,"pubYear":"2008.09","publisher":"南海出版公司","title":"嫌疑人X的献身"},{"author":"(日本) 东野圭吾著","callNo":"I313.45/D648-89","docTypeName":"中文图书","isbn":"978-7-5447-6721-7","marcRecNo":"6b6a2b6176645056394e42316c72782f742b667936513d3d","num":6,"pubYear":"2017","publisher":"译林出版社","title":"那时的某人"},{"author":"(日) 东野圭吾著","callNo":"I313.45/D648-103","docTypeName":"中文图书","isbn":"978-7-5442-9516-1","marcRecNo":"625961683362355333774675376b5856394f2b644b513d3d","num":7,"pubYear":"2019","publisher":"南海出版公司","title":"预知梦"},{"author":"(日) 东野圭吾著","callNo":"I313.45/D648-95","docTypeName":"中文图书","isbn":"978-7-5442-9414-0","marcRecNo":"7868786e66637832435a4a32597745365147774e54673d3d","num":8,"pubYear":"2019","publisher":"南海出版公司","title":"禁断的魔术"},{"author":"(日) 东野圭吾著","callNo":"I313.45/D648-38/2D","docTypeName":"中文图书","isbn":"978-7-5442-7544-6","marcRecNo":"48625a485151784e70652f46427a493370504a6575773d3d","num":9,"pubYear":"2015","publisher":"南海出版公司","title":"黎明之街.第2版"},{"author":"(日) 东野圭吾著","callNo":"I313.45/D648-11:1","docTypeName":"中文图书","isbn":"978-7-5442-8564-3","marcRecNo":"6a503647342b7766536834714d352f6a4365697061513d3d","num":10,"pubYear":"2017","publisher":"南海出版公司","title":"圣女的救济"},{"author":"(日) 东野圭吾著","callNo":"I313.45/D648-78:1","docTypeName":"中文图书","isbn":"978-7-5442-9536-9","marcRecNo":"38714145415131696e614e532f3534576d6934596b513d3d","num":11,"pubYear":"2019","publisher":"南海出版公司","title":"侦探伽利略"},{"author":"(日) 东野圭吾著","callNo":"I313.45/D648-38","docTypeName":"中文图书","isbn":"978-7-5442-5672-8","marcRecNo":"6556524c47657761334934307052596c7453455031773d3d","num":12,"pubYear":"2012","publisher":"南海出版公司","title":"黎明之街"},{"author":"(日) 太宰治著","callNo":"I313.45/T149-12:1","docTypeName":"中文图书","isbn":"978-7-5411-4618-3","marcRecNo":"4c6e4b454561422f4e4b5232415666493454455432413d3d","num":13,"pubYear":"2017","publisher":"四川文艺出版社","title":"小丑之花"},{"author":"(美) Alexis Van Hurkman著","callNo":"TP391.413/F233","docTypeName":"中文图书","isbn":"978-7-115-45361-7","marcRecNo":"5a6f3659452f49524a74524375374368526f354637773d3d","num":14,"pubYear":"2017","publisher":"人民邮电出版社","title":"调色师手册:电影和视频调色专业技法:professional techniques for video and cinema"},{"author":"李楠著","callNo":"","docTypeName":"中文图书","isbn":"978-7-5203-4834-8","marcRecNo":"5a3246386c4b3337685742662b475954674c4f6a5a413d3d","num":15,"pubYear":"2019.09","publisher":"中国社会科学出版社","title":"习性:布尔迪厄实践理论路标"}],"facetsList":[{"facetList":[{"code":"长篇小说","count":7,"name":"长篇小说"},{"code":"chang pian xiao shuo","count":5,"name":"chang pian xiao shuo"},{"code":"推理小说","count":5,"name":"推理小说"},{"code":"短篇小说","count":4,"name":"短篇小说"},{"code":"duan pian xiao shuo","count":3,"name":"duan pian xiao shuo"},{"code":"小说集","count":3,"name":"小说集"},{"code":"Chang Pian Xiao Shuo","count":2,"name":"Chang Pian Xiao Shuo"},{"code":"Tui Li Xiao Shuo","count":2,"name":"Tui Li Xiao Shuo"},{"code":"tui li xiao shuo","count":2,"name":"tui li xiao shuo"},{"code":"中篇小说","count":1,"name":"中篇小说"},{"code":"Duan Pian Xiao Shuo","count":1,"name":"Duan Pian Xiao Shuo"},{"code":"研究","count":1,"name":"研究"},{"code":"文学理论","count":1,"name":"文学理论"},{"code":"zhong pian xiao shuo","count":1,"name":"zhong pian xiao shuo"},{"code":"bu er di e","count":1,"name":"bu er di e"},{"code":"布尔迪厄","count":1,"name":"布尔迪厄"},{"code":"图象处理软件","count":1,"name":"图象处理软件"},{"code":"调色","count":1,"name":"调色"},{"code":"tiao se","count":1,"name":"tiao se"}],"id":"subjectFacet","label":"主题词"},{"facetList":[{"code":"21002","count":11,"name":"大学城文学馆(三楼A区)"},{"code":"00003","count":6,"name":"石牌中文文史借阅室(二楼北座)"},{"code":"00093","count":5,"name":"石牌新书空间(一楼东座)"},{"code":"400B3","count":2,"name":"南海三楼图书阅览区(三楼东、西北、西南)"},{"code":"400XS","count":1,"name":"南海新书展厅"},{"code":"00001","count":1,"name":"石牌中文理科借阅室(二楼西座)"}],"id":"locationFacet","label":"馆藏地"},{"facetList":[{"code":"(日) 东野圭吾著","count":10,"name":"(日) 东野圭吾著"},{"code":"东野圭吾,","count":8,"name":"东野圭吾,"},{"code":"刘子倩","count":5,"name":"刘子倩"},{"code":"东野圭吾","count":4,"name":"东野圭吾"},{"code":"李超楠","count":2,"name":"李超楠"},{"code":"袁斌","count":2,"name":"袁斌"},{"code":"李楠","count":1,"name":"李楠"},{"code":"高铭","count":1,"name":"高铭"},{"code":"李楠著","count":1,"name":"李楠著"},{"code":"(日)东野圭吾著","count":1,"name":"(日)东野圭吾著"},{"code":"太宰治,","count":1,"name":"太宰治,"},{"code":"(日本) 东野圭吾著","count":1,"name":"(日本) 东野圭吾著"},{"code":"(日) 太宰治著","count":1,"name":"(日) 太宰治著"},{"code":"范·赫克曼","count":1,"name":"范·赫克曼"},{"code":"(Van Hurkman, Alexis)","count":1,"name":"(Van Hurkman, Alexis)"},{"code":"吕灵芝","count":1,"name":"吕灵芝"},{"code":"张北辰","count":1,"name":"张北辰"},{"code":"(美) Alexis Van Hurkman著","count":1,"name":"(美) Alexis Van Hurkman著"},{"code":"吐雅","count":1,"name":"吐雅"},{"code":"蓝佳","count":1,"name":"蓝佳"}],"id":"authorFacet","label":"作者"},{"facetList":[{"code":"01","count":15,"name":"中文图书"}],"id":"docTypeFacet","label":"文献类型"},{"facetList":[{"code":"I","count":12,"name":"文学"},{"code":"T","count":1,"name":"工业技术"}],"id":"clsNoFacet","label":"分类"},{"facetList":[{"code":"CHI","count":15,"name":"中文"}],"id":"langFacet","label":"语言"},{"facetList":[{"code":"南海出版公司 ","count":9,"name":"南海出版公司 "},{"code":"中国社会科学出版社 ","count":1,"name":"中国社会科学出版社 "},{"code":"四川文艺出版社 ","count":1,"name":"四川文艺出版社 "},{"code":"人民邮电出版社 ","count":1,"name":"人民邮电出版社 "},{"code":"南海出版社 ","count":1,"name":"南海出版社 "},{"code":"译林出版社 ","count":1,"name":"译林出版社 "},{"code":"接力出版社 ","count":1,"name":"接力出版社 "}],"id":"publisherFacet","label":"出版社"},{"facetList":[{"code":"2019","count":4,"name":"2019"},{"code":"2017","count":4,"name":"2017"},{"code":"2015","count":1,"name":"2015"},{"code":"2014","count":2,"name":"2014"},{"code":"2012","count":1,"name":"2012"},{"code":"2008","count":3,"name":"2008"}],"id":"pubYearFacet","label":"出版年份"}],"filters":[],"translateWords":[{"code":"","name":""}]};

Page({
  data: {
    init: true,
    loading: false,
    total: 0,
    keywords: '',
    searchResult: [],
  },

  onLoad(query) {
    const { keywords } = query;
    this.setData({
      keywords,
      init: !!keywords,
      searchResult: initialSearchResultT.content as any,
    });
  },
});
