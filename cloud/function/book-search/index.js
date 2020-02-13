const axios = require("axios");
const cloud = require("wx-server-sdk");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

exports.main = async event => {
  const { keywords, pageSize = 10, pageCount } = event;
  try {
    const { data } = await axios.post(
      "http://202.116.41.246:8080/opac/ajax_search_adv.php",
      {
        searchWords: [
          {
            fieldList: [
              {
                fieldCode: "",
                fieldValue: keywords
              }
            ]
          }
        ],
        filters: [],
        limiter: [],
        sortField: "relevance",
        sortType: "desc",
        pageSize,
        pageCount,
        locale: "zh_CN",
        first: true
      }
    );

    // 图书馆网站的错误信息
    if (data.err) {
      throw data.errMsg;
    }

    return {
      success: true,
      data,
    };
  } catch (e) {
    console.error(e);
    return {
      success: false
    };
  }
};
