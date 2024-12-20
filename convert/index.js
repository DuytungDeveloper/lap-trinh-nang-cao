const fs = require("fs");
const csv = require("csv-parser");
const moment = require("moment");
const { migraData } = require("./migrationLocal");
// moment.defineLocale("vi", "Asia/Ho_Chi_Minh");
const BankShowInfo = {
  KLB: {
    bin: "970452",
    shortName: "KienLongBank",
    name: "Ngân hàng TMCP Kiên Long",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/KLB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  STB: {
    bin: "970403",
    shortName: "Sacombank",
    name: "Ngân hàng TMCP Sài Gòn Thương Tín",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/STB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  IBKHN: {
    bin: "970455",
    shortName: "IBKHN",
    name: "Ngân hàng Công nghiệp Hàn Quốc - Chi nhánh Hà Nội",
    bankLogoUrl:
      "https://img.mservice.io/momo_app_v2/new_version/All_team_/new_logo_bank/ic_ibk_bank.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: true,
  },
  BIDV: {
    bin: "970418",
    shortName: "BIDV",
    name: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/BIDV.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  VRB: {
    bin: "970421",
    shortName: "VRB",
    name: "Ngân hàng Liên doanh Việt - Nga",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/VRB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  KEBHANAHCM: {
    bin: "970466",
    shortName: "KebHanaHCM",
    name: "Ngân hàng KEB Hana – Chi nhánh Thành phố Hồ Chí Minh",
    bankLogoUrl: "https://img.mservice.com.vn/app/img/payment/KEBHANAHCM.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: false,
  },
  SHB: {
    bin: "970443",
    shortName: "SHB",
    name: "Ngân hàng TMCP Sài Gòn - Hà Nội",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/SHB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  PBVN: {
    bin: "970439",
    shortName: "PublicBank",
    name: "Ngân hàng TNHH MTV Public Việt Nam",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/PBVN.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  DBS: {
    bin: "796500",
    shortName: "DBSBank",
    name: "DBS Bank Ltd - Chi nhánh Thành phố Hồ Chí Minh",
    bankLogoUrl:
      "https://img.mservice.io/momo_app_v2/new_version/All_team_/new_logo_bank/ic_dbs.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: true,
  },
  VARB: {
    bin: "970405",
    shortName: "Agribank",
    name: "Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/VARB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  CFC: {
    bin: "970460",
    shortName: "VietCredit",
    name: "Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/CFC.png",
    isVietQr: false,
    isNapas: true,
    isDisburse: false,
  },

  DAB: {
    bin: "970406",
    shortName: "DongABank",
    name: "Ngân hàng TMCP Đông Á",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/DAB.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: true,
  },
  VB: {
    bin: "970433",
    shortName: "VietBank",
    name: "Ngân hàng TMCP Việt Nam Thương Tín",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/VB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  EIB: {
    bin: "970431",
    shortName: "Eximbank",
    name: "Ngân hàng TMCP Xuất Nhập khẩu Việt Nam",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/EIB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  VNPTMONEY: {
    bin: "971011",
    shortName: "VNPTMoney",
    name: "VNPT Money",
    bankLogoUrl: "https://img.mservice.com.vn/app/img/payment/VNPTMONEY.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: false,
  },
  SGB: {
    bin: "970400",
    shortName: "SaigonBank",
    name: "Ngân hàng TMCP Sài Gòn Công Thương",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/SGB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  CAKE: {
    bin: "546034",
    shortName: "CAKE",
    name: "TMCP Việt Nam Thịnh Vượng - Ngân hàng số CAKE by VPBank",
    bankLogoUrl:
      "https://img.mservice.io/momo_app_v2/new_version/All_team_/new_logo_bank/ic_cake.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: true,
  },
  PGB: {
    bin: "970430",
    shortName: "PGBank",
    name: "Ngân hàng TMCP Xăng dầu Petrolimex",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/PGB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  NVB: {
    bin: "970419",
    shortName: "NCB",
    name: "Ngân hàng TMCP Quốc Dân",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/NVB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  HSBC: {
    bin: "458761",
    shortName: "HSBC",
    name: "Ngân hàng TNHH MTV HSBC (Việt Nam)",
    bankLogoUrl:
      "https://img.mservice.io/momo_app_v2/new_version/All_team_/new_logo_bank/ic_hsbc.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: true,
  },
  STANDARD: {
    bin: "970410",
    shortName: "StandardChartered",
    name: "Ngân hàng TNHH MTV Standard Chartered Bank Việt Nam",
    bankLogoUrl:
      "https://img.mservice.io/momo_app_v2/new_version/All_team_/new_logo_bank/ic_standard_chartered.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: true,
  },
  TCB: {
    bin: "970407",
    shortName: "Techcombank",
    name: "Ngân hàng TMCP Kỹ thương Việt Nam",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/TCB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  IVB: {
    bin: "970434",
    shortName: "IndovinaBank",
    name: "Ngân hàng TNHH Indovina",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/IVB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  // MBVCB: {
  //   bin: "970436",
  //   shortName: "VietcomBank",
  //   name: "Ngân hàng TMCP Ngoại Thương Việt Nam",
  //   bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/VCB.png",
  //   isVietQr: true,
  //   isNapas: true,
  //   isDisburse: true,
  // },
  VCB: {
    bin: "970436",
    shortName: "VietcomBank",
    name: "Ngân hàng TMCP Ngoại Thương Việt Nam",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/VCB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  MB: {
    bin: "970422",
    shortName: "MBBank",
    name: "Ngân hàng TMCP Quân đội",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/MB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  KEBHANAHN: {
    bin: "970467",
    shortName: "KebHanaHN",
    name: "Ngân hàng KEB Hana – Chi nhánh Hà Nội",
    bankLogoUrl: "https://img.mservice.com.vn/app/img/payment/KEBHANAHCM.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: false,
  },
  SVB: {
    bin: "970424",
    shortName: "ShinhanBank",
    name: "Ngân hàng TNHH MTV Shinhan Việt Nam",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/SVB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  KBHN: {
    bin: "970462",
    shortName: "KookminHN",
    name: "Ngân hàng Kookmin - Chi nhánh Hà Nội",
    bankLogoUrl:
      "https://img.mservice.io/momo_app_v2/new_version/All_team_/new_logo_bank/ic_kookmin_hn.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: true,
  },
  LPB: {
    bin: "970449",
    shortName: "LienVietPostBank",
    name: "Ngân hàng TMCP Bưu Điện Liên Việt",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/LPB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  PVCB: {
    bin: "970412",
    shortName: "PVcomBank",
    name: "Ngân hàng TMCP Đại Chúng Việt Nam",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/PVCB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  ABB: {
    bin: "970425",
    shortName: "ABBANK",
    name: "Ngân hàng TMCP An Bình",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/ABB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  CBB: {
    bin: "970444",
    shortName: "CBBank",
    name: "Ngân hàng Thương mại TNHH MTV Xây dựng Việt Nam",
    bankLogoUrl:
      "https://img.mservice.io/momo_app_v2/new_version/All_team_/new_logo_bank/ic_cbbank.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: true,
  },
  KBHCM: {
    bin: "970463",
    shortName: "KookminHCM",
    name: "Ngân hàng Kookmin - Chi nhánh Thành phố Hồ Chí Minh",
    bankLogoUrl:
      "https://img.mservice.io/momo_app_v2/new_version/All_team_/new_logo_bank/ic_kookmin_hcm.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: true,
  },
  HDB: {
    bin: "970437, 970420",
    shortName: "HDBank",
    name: "Ngân hàng TMCP Phát triển Thành phố Hồ Chí Minh",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/HDB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  TPB: {
    bin: "970423",
    shortName: "TPBank",
    name: "Ngân hàng TMCP Tiên Phong",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/TPB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  VPB: {
    bin: "970432",
    shortName: "VPBank",
    name: "Ngân hàng TMCP Việt Nam Thịnh Vượng",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/VPB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  Ubank: {
    bin: "546035",
    shortName: "Ubank",
    name: "TMCP Việt Nam Thịnh Vượng - Ngân hàng số Ubank by VPBank",
    bankLogoUrl:
      "https://img.mservice.io/momo_app_v2/new_version/All_team_/new_logo_bank/ic_ubank.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: true,
  },
  WOO: {
    bin: "970457",
    shortName: "Woori",
    name: "Ngân hàng TNHH MTV Woori Việt Nam",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/WOO.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  OJB: {
    bin: "970414",
    shortName: "Oceanbank",
    name: "Ngân hàng Thương mại TNHH MTV Đại Dương",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/OJB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  VTLMONEY: {
    bin: "971005",
    shortName: "ViettelMoney",
    name: "Viettel Money",
    bankLogoUrl: "https://img.mservice.com.vn/app/img/payment/VIETTELMONEY.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: false,
  },
  SEAB: {
    bin: "970440",
    shortName: "SeABank",
    name: "Ngân hàng TMCP Đông Nam Á",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/Seab.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  IBKHCM: {
    bin: "970456",
    shortName: "IBKHCM",
    name: "Ngân hàng Công nghiệp Hàn Quốc - Chi nhánh TP. Hồ Chí Minh",
    bankLogoUrl: "https://img.mservice.com.vn/app/img/payment/IBK.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: false,
  },
  COB: {
    bin: "970446",
    shortName: "COOPBANK",
    name: "Ngân hàng Hợp tác xã Việt Nam",
    bankLogoUrl:
      "https://img.mservice.io/momo_app_v2/new_version/All_team_/new_logo_bank/ic_coop_bank.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: true,
  },
  MSB: {
    bin: "970426",
    shortName: "MSB",
    name: "Ngân hàng TMCP Hàng Hải",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/MSB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  ACB: {
    bin: "970416",
    shortName: "ACB",
    name: "Ngân hàng TMCP Á Châu",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/ACB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  NASB: {
    bin: "970409",
    shortName: "BacABank",
    name: "Ngân hàng TMCP Bắc Á",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/NASB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  CIMB: {
    bin: "422589",
    shortName: "CIMB",
    name: "Ngân hàng TNHH MTV CIMB Việt Nam",
    bankLogoUrl:
      "https://img.mservice.io/momo_app_v2/new_version/All_team_/new_logo_bank/ic_cimb.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: true,
  },
  VCCB: {
    bin: "970454",
    shortName: "VietCapitalBank",
    name: "Ngân hàng TMCP Bản Việt",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/VCCB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  KBankHCM: {
    bin: "668888",
    shortName: "KBank",
    name: "Ngân hàng Đại chúng TNHH Kasikornbank",
    bankLogoUrl:
      "https://img.mservice.io/momo_app_v2/new_version/All_team_/new_logo_bank/ic_kbank.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: true,
  },
  CTG: {
    bin: "970415",
    shortName: "VietinBank",
    name: "Ngân hàng TMCP Công thương Việt Nam",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/CTG.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  UOB: {
    bin: "970458",
    shortName: "UnitedOverseas",
    name: "Ngân hàng United Overseas - Chi nhánh TP. Hồ Chí Minh",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/UOB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  HLB: {
    bin: "970442",
    shortName: "HongLeong",
    name: "Ngân hàng TNHH MTV Hong Leong Việt Nam",
    bankLogoUrl:
      "https://img.mservice.io/momo_app_v2/new_version/All_team_/new_logo_bank/ic_hong_leon_bank.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: true,
  },
  NAB: {
    bin: "970428",
    shortName: "NamABank",
    name: "Ngân hàng TMCP Nam Á",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/NAB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  VIB: {
    bin: "970441",
    shortName: "VIB",
    name: "Ngân hàng TMCP Quốc tế Việt Nam",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/VIB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  BVB: {
    bin: "970438",
    shortName: "BaoVietBank",
    name: "Ngân hàng TMCP Bảo Việt",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/BVB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  OCB: {
    bin: "970448",
    shortName: "OCB",
    name: "Ngân hàng TMCP Phương Đông",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/OCB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  TIMO: {
    bin: "963388",
    shortName: "Timo",
    name: "Ngân hàng số Timo by Ban Viet Bank (Timo by Ban Viet Bank)",
    bankLogoUrl: "https://img.mservice.com.vn/app/img/payment/TIMO.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: true,
  },
  NonghyupBankHN: {
    bin: "801011",
    shortName: "Nonghyup",
    name: "Ngân hàng Nonghyup - Chi nhánh Hà Nội",
    bankLogoUrl:
      "https://img.mservice.io/momo_app_v2/new_version/All_team_/new_logo_bank/ic_nonghyu.png",
    isVietQr: true,
    isNapas: false,
    isDisburse: true,
  },
  MAFC: {
    bin: "970468",
    shortName: "MiraeAsset",
    name: "Công ty Tài chính TNHH MTV Mirae Asset (Việt Nam)",
    bankLogoUrl: "https://img.mservice.com.vn/app/img/payment/MAFC.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: false,
  },
  SCB: {
    bin: "970429",
    shortName: "SCB",
    name: "Ngân hàng TMCP Sài Gòn",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/SCB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  VAB: {
    bin: "970427",
    shortName: "VietABank",
    name: "Ngân hàng TMCP Việt Á",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/VAB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
  GPB: {
    bin: "970408",
    shortName: "GPBank",
    name: "Ngân hàng Thương mại TNHH MTV Dầu Khí Toàn Cầu",
    bankLogoUrl: "https://img.mservice.com.vn/momo_app_v2/img/GPB.png",
    isVietQr: true,
    isNapas: true,
    isDisburse: true,
  },
};
const listKeyBanks = Object.keys(BankShowInfo);

const getBankCodeByDetail = (d) => {
  for (let j = 0; j < listKeyBanks.length; j++) {
    const bank = listKeyBanks[j];
    foundBank = d.toString().toLowerCase().includes(bank.toLowerCase());
    if (foundBank) {
      return bank;
    }
  }

  return undefined;
};
const createSearchable = (data) => {
  const listD = [
    data.code,
    moment(data.date_time).format("DD/MM/YYYY"),
    data.credit.toString(),
    data.debit.toString(),
    data.detail,
    data.bankCode ?? "",
  ];

  return listD.join(" ");
};

function csvToJson(filePath) {
  const results = [];

  // Read CSV file
  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => {
      const splitData = data[Object.keys(data)[0]].split("_");
      const dateTimeString = splitData[0];
      const code = splitData[1];
      const d = {
        code,
        date_time: moment(dateTimeString, "DD/MM/YYYY").toDate(),
        trans_no: Number(data.trans_no),
        credit: Number(data.credit),
        debit: Number(data.debit),
        detail: data.detail,
        bankCode: getBankCodeByDetail(data.detail),
      };
      d.searchable = createSearchable(d);
      results.push(d);
    }) // Parse each row and push to array
    .on("end", () => {
      // Log the JSON result
      console.log("CONVERT DONE");
      fs.writeFileSync("chuyen_khoan.json", JSON.stringify(results));
      migraData('./chuyen_khoan.json');
    })
    .on("error", (error) => {
      console.error("Error reading CSV file:", error);
    });
}

// Replace 'yourfile.csv' with the path to your CSV file
csvToJson("chuyen_khoan.csv");
