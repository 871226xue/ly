let body = $response.body;

try {
  let obj = JSON.parse(body);

  if (obj.body) {
    const keys = [
      "AD_4G_CACHE_IMAGE",
      "AD_PUSH_SWITCH",
      "MG_LAUNCHAD_4G_DOWNLOAD",
      "ORAL_SEEDING_AD",
      "H5_ADVERT",
      "H5_ADVERT_TEST"
    ];

    for (const k of keys) {
      if (obj.body[k]) {
        obj.body[k].paramValue = "false";
        obj.body[k].active = false;
        obj.body[k].status = 0;
      }
    }

    if (obj.body.BLOCK_AD) {
      obj.body.BLOCK_AD.active = true;
      obj.body.BLOCK_AD.paramValue = "45648678979,639578775,639909059";
    }

    if (obj.body.BEFORE_PASTER_AD_CONFIG) {
      obj.body.BEFORE_PASTER_AD_CONFIG.paramValue = JSON.stringify({
        can_skip: true,
        skip_ad: {
          title: "",
          sub_title: "",
          action: {}
        },
        default_ad: {},
        basketball_ad: {},
        football_ad: {},
        nba_ad: {},
        ufc_ad: {},
        marketInfo: {}
      });
      obj.body.BEFORE_PASTER_AD_CONFIG.active = false;
    }
  }

  body = JSON.stringify(obj);
} catch (e) {}

$done({ body });