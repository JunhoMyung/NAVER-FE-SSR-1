class PayloadSelector {
  static payloadMap = {
    bulguksa: {
      keyword: "경주 불국사",
      order: ["mainCard", "influencers", "view", "news"],
      mainCard: {
        colorScheme: {
          background: "rgb(236, 239, 243)",
          topBorder: "#c2c9cd",
          subTitle: "rgba(107,112,122,0.8)",
          subTapColor: "#6b707a",
          subTapBar: "rgba(135,142,154,0.3)",
          circleColor: "rgba(135,142,154,0.3)",
          circleHover: "#9fa4aa",
        },
        title: {
          name: "경주 불국사",
          type: "문화재",
          "title-url": "https://m.terms.naver.com/~~~",
          subName: "慶州 佛國寺",
        },
        subTap: {
          mainTap: {
            title: "전체",
            href: "https://search.naver.com",
            order: "first",
          },
          list: [
            {
              title: "기본정보",
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EA%B8%B0%EB%B3%B8%EC%A0%95%EB%B3%B4",
            },
            {
              title: "포토",
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%ED%8F%AC%ED%86%A0",
            },
            {
              title: "주변 문화재",
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22isOpen%22%3Atrue%2C%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%A3%BC%EB%B3%80%20%EB%AC%B8%ED%99%94%EC%9E%AC",
            },
            {
              title: "함께 찾은 문화재",
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%ED%95%A8%EA%BB%98%20%EC%B0%BE%EC%9D%80%20%EB%AC%B8%ED%99%94%EC%9E%AC",
            },
          ],
        },
        common: {
          title: "기본정보",
          information: {
            //detail-info?
            지정종목: {
              detail: "사적",
              link: false,
            },
            지정일: {
              detail: "2009년 12월 21일",
              link: false,
            },
            소재지: {
              detail: "경북 경주시 불국로 385, 등 (진현동)",
              link: true,
              url: "https://map.naver.com/v5/?c=14396938.5121574,4271253.7030237,15,0,0,0,dh&lng=129.3298991&lat=35.7862812&type=0&title=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC",
            },

            시대: {
              detail: "통일신라",
              link: false,
            },
            "종류/분류": {
              detail: "사찰",
              link: false,
            },
            크기: {
              detail: "면적 409,315㎡",
              link: false,
            },
          },
          descriptionText:
            "경북 경주시 진현동 토함산 기슭에 있는 신라시대 절. 사적이다.",
          descriptionURL:
            "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EA%B8%B0%EB%B3%B8%EC%A0%95%EB%B3%B4",
          imageList: [
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_361%2F20200109065040326_XPT7GLZUJ.gif%2F79773_0.gif%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "경주 불국사 본문 이미지 1",
            },
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902073710511_860A9OWJX.jpg%2F10545613.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "불국사",
            },
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902073711216_OY29PF7YZ.jpg%2F10545615.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "불국사",
            },
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075005787_MHOWJN4CB.jpg%2F10708602.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "불국사 극락전",
            },
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075038404_2I15WK6H0.jpg%2F10712762.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "불국사 범종각",
            },
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075023229_D1LCQXNAW.jpg%2F10708964.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "불국사 범영루",
            },
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075034463_PDFPYQ309.jpg%2F10712722.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "경주 불국사 가구식 석축",
            },
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075025139_T8DBAC4OE.jpg%2F10711974.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "불국사 부도",
            },
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075006710_JPWT5VUKN.jpg%2F10708743.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "경주 불국사 다보탑",
            },
            {
              src: "https://search.pstatic.net/common?type=b&size=336&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075021801_AN6BXN7JK.jpg%2F10708902.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              alt: "불국사 대웅전 석가모니불",
            },
          ],
          imgURL:
            "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%ED%8F%AC%ED%86%A0",
          place:
            "http://map.naver.com?title=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC&y=35.7862812&x=129.3298991",
        },
        similar: {
          header: {
            title: "주변 문화재",
            href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22isOpen%22%3Atrue%2C%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%A3%BC%EB%B3%80%20%EB%AC%B8%ED%99%94%EC%9E%AC",
          },
          list: [
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371948&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371948%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%82%AC%EB%A6%AC%ED%83%91",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008211011491_G1633N7QS.jpg%2F281185.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 불국사 사리탑",
              sub_text: "두산백과",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371947&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371947%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EB%8B%A4%EB%B3%B4%ED%83%91",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075010177_IXCH29M6I.jpg%2F10708747.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 불국사 다보탑",
              sub_text: "두산백과",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371949&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371949%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%97%B0%ED%99%94%EA%B5%90%20%EB%B0%8F%20%EC%B9%A0%EB%B3%B4%EA%B5%90",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_358%2F20191003065723134_SXYKMPWTR.jpg%2F10712543.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 불국사 연화교 및 칠보교",
              sub_text: "두산백과",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371950&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371950%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%B2%AD%EC%9A%B4%EA%B5%90%20%EB%B0%8F%20%EB%B0%B1%EC%9A%B4%EA%B5%90",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_358%2F20191003065735379_2CUDJ80NG.jpg%2F10712802.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 불국사 청운교 및 백운교",
              sub_text: "두산백과",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19395172&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219395172%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%82%BC%EC%B8%B5%EC%84%9D%ED%83%91",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008214158883_IF146FBXU.jpg%2F486097.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 불국사 삼층석탑",
              sub_text: "두산백과",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371234&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371234%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%A7%88%EB%8F%99%20%EC%82%BC%EC%B8%B5%EC%84%9D%ED%83%91",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_386%2F20211014063558830_KXCD4BIVZ.jpg%2F10498382.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 마동 삼층석탑",
              sub_text: "두산백과",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19372050&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219372050%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EC%84%9D%EA%B5%B4%EC%95%94%20%EC%84%9D%EA%B5%B4",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902073502436_M8K2CUP77.jpg%2F10532114.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 석굴암 석굴",
              sub_text: "두산백과",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19375990&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219375990%22%7D&qvt=0&query=%EC%88%98%EB%B4%89%EC%A0%95",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_363%2F20200604064411841_SIAJG68RQ.jpg%2F10704192.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "수봉정",
              sub_text: "두산백과",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19376339&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219376339%22%7D&qvt=0&query=%EA%B0%90%EC%82%B0%EC%82%AC%EC%A7%80%20%EC%82%BC%EC%B8%B5%EC%84%9D%ED%83%91",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_384%2F20210907074300212_EWTMXOP5M.jpg%2F10706452.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "감산사지 삼층석탑",
              sub_text: "두산백과",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19373294&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219373294%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EA%B5%AC%EC%A0%95%EB%8F%99%20%EA%B3%A0%EB%B6%84%EA%B5%B0",
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=75&direct=true&src=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_386%2F20211014063514235_5MQVWI6BD.jpg%2F10496794.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN",
              title: "경주 구정동 고분군",
              sub_text: "두산백과",
            },
          ],
        },
      },
      view: {
        header: {
          title: "VIEW",
        },
        colorScheme: {
          circleColor: "rgba(135,142,154,0.3)",
          circleHover: "#9fa4aa",
        },
        list: [
          {
            blog: {
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fblogpfthumb-phinf.pstatic.net%2FMjAxODA4MTBfMTU5%2FMDAxNTMzODYwNDcyMjQy.PPwtfIzpjpX2YCt8YkKckTS6gT4WfRO3OE5FI9RF0l8g.9mtuWOCclQdM9DzRjUuXU9tIUXqJhb_yUXdcji8CCIUg.JPEG.tcacyc%2FprofileImage.jpg&type=f54_54",
              title: "일상탈출",
              influencer: "true",
              time: "2021.10.24.",
              href: "https://in.naver.com/tcacyc",
            },
            body: {
              title: "경주 가볼만한곳 대릉원 불국사 야경투어",
              detail:
                "경주 불국사 경북 경주시 불국로 385 운영시간 : 8시 ~ 18시 30분 이용요금 : 어린 6,000원 / 청소년 4,000원 / 어린이 3,000원 대릉원에서 나와 세계적으로 유명한 경주 가볼만한곳 불국사를...",
              src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMjNfMTgz%2FMDAxNjM0OTg4MzgwODQ0.ooUWwC9bQPC5T0eg6eXjin2hzCrTd2yELoX47HIi4tAg.5R8OaqPoFpJVJvwTIcHjQxuNU7yTYGzKmH3_AcCF-ecg.JPEG.tcacyc%2F01_%25B0%25E6%25C1%25D6.jpg%23900x700&type=ff192_192",
              href: "https://m.blog.naver.com/tcacyc/222546516689",
            },
            tags: {
              list: [],
            },
            link: {
              text: "일상탈출의 #경주야경투어 콘텐츠 더보기",
              href: "https://in.naver.com/tcacyc/challenge/keyword/253560942475009",
            },
          },

          {
            blog: {
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fphinf.pstatic.net%2Fcontact%2F20191031_234%2F1572455419925mTYwA_JPEG%2F1.jpg&type=f54_54",
              title: "쏠트몬",
              influencer: "true",
              time: "2021.11.05.",
              href: "https://in.naver.com/soltmon",
            },
            body: {
              title: "경주 가볼만한곳 불타는 단풍 가을 불국사",
              detail:
                "경주 가볼만한곳들은 대체로 입장료가 있더라고요. < 불국사 입장료 > 어른 19~64세 6,000원 중고생 13~18세 4,000원 어린이 만 7~12세 3,000원 만 65세 이상, 장애인, 경주시민, 국가유공자...",
              src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMTJfMTQg%2FMDAxNjE1NTMzNzEzOTM0.1Q2LejcBHwG8iOz84Xqwr5RZ12dp-4mCCn1QzhJAX0Ig.CwnIXA8yGf8QWNEHpgdqc5XicSEBmWnnCXHVbbG5t6kg.JPEG.kyena200%2FP20201103_135558747_9ADC25F0-B619-4D5A-A777-BE02ECE810CF.jpg%23665x665&type=ff192_192",
              href: "https://m.blog.naver.com/kyena200/222556888699",
            },
            tags: {
              list: [],
            },
            link: {
              text: "쏠트몬의 #가을나들이 콘텐츠 더보기",
              href: "https://in.naver.com/soltmon/challenge/keyword/365368432715808",
            },
          },
        ],
      },
      influencer: {
        colorScheme: {
          main: "#3d92ff",
          border: "rgba(61,146,255,.2)",
        },
        header: {
          title: "인플루언서",
          subtitle: {
            href: "https://in.naver.com/",
            text: "서비스 홈 바로가기",
          },
        },
        "tab-lists": [
          {
            title: "전체",
            subtitle: "219명",
          },
          {
            title: "여행 전문블로거",
            subtitle: "184명",
            image:
              "https://search.pstatic.net/common/?src=https%3A%2F%2Finfluencer-phinf.pstatic.net%2FMjAyMTAyMjBfMjIw%2FMDAxNjEzODI0MTI4MjY2.NsYFY3IP3eNRxSJ-U7UoKSLPF_ch-MR2nOBk5fsqJ74g.96TznFDsmbOEYYEkFycgMcLIp-7saYkZnSgI7MyHZY0g.JPEG%2F20200702_170647_HDR%25EB%25A6%25AC.jpg&type=f76_76",
            url: "https://m.search.naver.com/search.naver?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC&where=m_influencer&x_influencer=%7B%22filters%22%3A%7B%22majorSubject%22%3A%22241111160716608%22%2C%22minorSubject%22%3A%22%22%2C%22gender%22%3A%22%22%2C%22generation%22%3A%22%22%2C%22channel%22%3A%22%22%7D%7D",
          },
          {
            title: "여행 작가",
            subtitle: "23명",
            image:
              "https://search.pstatic.net/common/?src=https%3A%2F%2Finfluencer-phinf.pstatic.net%2FMjAyMDA3MzFfMTQ1%2FMDAxNTk2MTY4MTg0Mzcx.wXgx95MUKMhEHAMlAPNSa6mIH4kLESrxWbzV3PotN7Mg.ktRi1zDRO-8BKlxJxpvM7dxDKw4RlPDbhi01sdLoGUIg.JPEG%2F1590713777843.jpg&type=f76_76",
            url: "https://m.search.naver.com/search.naver?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC&where=m_influencer&x_influencer=%7B%22filters%22%3A%7B%22majorSubject%22%3A%22114730293178976%22%2C%22minorSubject%22%3A%22%22%2C%22gender%22%3A%22%22%2C%22generation%22%3A%22%22%2C%22channel%22%3A%22%22%7D%7D",
          },
          {
            title: "여행 영상크리에이터",
            subtitle: "5명",
            image:
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fphinf.pstatic.net%2Fcontact%2F20201219_67%2F1608338222810KGE3k_PNG%2FParmesan_Cheese.png&type=f76_76",
            url: "https://m.search.naver.com/search.naver?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC&where=m_influencer&x_influencer=%7B%22filters%22%3A%7B%22majorSubject%22%3A%22241111160724800%22%2C%22minorSubject%22%3A%22%22%2C%22gender%22%3A%22%22%2C%22generation%22%3A%22%22%2C%22channel%22%3A%22%22%7D%7D",
          },
          {
            title: "여행 가이드",
            subtitle: "2명",
            image:
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fhomebuilder-phinf.pstatic.net%2F%2FMjAyMTAzMTZfNCAg%2FMDAxNjE1ODY2NjQwNDY0.LbH7cJezvSaBOXTq3-d08MKdHs5w2vP4Du9crceZh5og.0WJ4Hyo7EJB8lzAGtq8I-cxnXytQRNe3cgzV_N5yRjIg.JPEG%2F1615866640451_20200109_160249.jpg&type=f76_76",
            url: "https://m.search.naver.com/search.naver?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC&where=m_influencer&x_influencer=%7B%22filters%22%3A%7B%22majorSubject%22%3A%22114733174055456%22%2C%22minorSubject%22%3A%22%22%2C%22gender%22%3A%22%22%2C%22generation%22%3A%22%22%2C%22channel%22%3A%22%22%7D%7D",
          },
          {
            title: "여행 플래너",
            subtitle: "2명",
            image:
              "https://search.pstatic.net/common/?src=https%3A%2F%2Finfluencer-phinf.pstatic.net%2FMjAyMDEyMjRfMzEg%2FMDAxNjA4Nzk1NjUwMjcy.YZAZlGKGCWkNYdygY3FXtdBIo1WnkFkTAQJHNCZMhMIg.kpZIVfe7hleB2r2uAXJz9A3_ZfCqN5q8spyQb4tjzDog.PNG%2F%25ED%258A%25B8%25EB%25A0%2588%25EB%25B8%2594%25EB%259F%25AC_%25ED%258F%25AC%25EC%258A%25A4%25ED%258A%25B8.png&type=f76_76",
            url: "https://m.search.naver.com/search.naver?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC&where=m_influencer&x_influencer=%7B%22filters%22%3A%7B%22majorSubject%22%3A%22114733280416288%22%2C%22minorSubject%22%3A%22%22%2C%22gender%22%3A%22%22%2C%22generation%22%3A%22%22%2C%22channel%22%3A%22%22%7D%7D",
          },
          {
            title: "여행 매거진에디터",
            subtitle: "1명",
            image:
              "https://search.pstatic.net/common/?src=https%3A%2F%2Finfluencer-phinf.pstatic.net%2FMjAyMTAyMDNfODkg%2FMDAxNjEyMzUxODYyMTcz.E1TaMaW4eclkUYkZdNczBiEV-JdqlcuVHM_9Ia6yjwsg.z4o3rBcTLRZv4epkOl5KwWeaGCNywgG4iKBEAOwRfiMg.JPEG%2FIMG_20210125_014524_080.jpg&type=f76_76",
            url: "https://m.search.naver.com/search.naver?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC&where=m_influencer&x_influencer=%7B%22filters%22%3A%7B%22majorSubject%22%3A%22241111173016896%22%2C%22minorSubject%22%3A%22%22%2C%22gender%22%3A%22%22%2C%22generation%22%3A%22%22%2C%22channel%22%3A%22%22%7D%7D",
          },
          {
            title: "숙소 운영",
            subtitle: "1명",
            image:
              "https://search.pstatic.net/common/?src=https%3A%2F%2Finfluencer-phinf.pstatic.net%2FMjAyMTAyMjZfMjg4%2FMDAxNjE0MzE4MzczODQ1.qF95W_PHj4_BgVkbRCyHoF2sBqJraKaLqEu_P6qs69wg.v2Jaa1xQBRlcykayS6dnGFWVxXBqJPqupw0j6uBDNd4g.JPEG%2FKakaoTalk_Photo_2021-01-30-09-32-05.jpeg&type=f76_76",
            url: "https://m.search.naver.com/search.naver?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC&where=m_influencer&x_influencer=%7B%22filters%22%3A%7B%22majorSubject%22%3A%22241111173025088%22%2C%22minorSubject%22%3A%22%22%2C%22gender%22%3A%22%22%2C%22generation%22%3A%22%22%2C%22channel%22%3A%22%22%7D%7D",
          },
          {
            title: "스냅샷 작가",
            subtitle: "1명",
            image:
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fhomebuilder-phinf.pstatic.net%2F%2FMjAyMTA4MjJfMjU5%2FMDAxNjI5NjA0ODk2OTkz.-X14LV_QAu1GKEkkCDB1fE3KiJ13XyNPtz6yppp1EYgg.YkHnAj16z5sJqg0ioXUno5PdvW88AogZuYMYcfIFE3wg.JPEG%2F1629604896914_DSC03815_tonemapped_r.jpg&type=f76_76",
            url: "https://m.search.naver.com/search.naver?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC&where=m_influencer&x_influencer=%7B%22filters%22%3A%7B%22majorSubject%22%3A%22241111173057856%22%2C%22minorSubject%22%3A%22%22%2C%22gender%22%3A%22%22%2C%22generation%22%3A%22%22%2C%22channel%22%3A%22%22%7D%7D",
          },
        ],
        influencers: [
          {
            title: "마리안",
            thumbnail: {
              image:
                "https://search.pstatic.net/common/?src=https%3A%2F%2Fhomebuilder-phinf.pstatic.net%2F%2FMjAyMTExMTFfNzAg%2FMDAxNjM2NjE5NzkzMTk0.sWkGNIZ_WLWIgPAKXAlzZ-eW14b-4ddDpw9OT1KYLAsg.kUgAsBViSTHeTpP_MQh6qNtdTxgzReCtoG4V_DHyYBkg.JPEG%2F1636619793169_20211111_091310.jpg&type=f96_96",
              url: "https://in.naver.com/anndam?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC",
              highlighted: "Gold",
            },
            subtitles: {
              title: "여행 전문블로거",
              fans: "팬 1.6만+",
              expertise: "국내 전문",
            },
            keywords: [
              {
                title: "2010 파워블로그",
                type: "Blog",
              },
              {
                key: "여행 스타일",
                value: "자연경관 선호",
              },
              {
                key: "창작 분야",
                value: "경험/노하우 공유",
              },
            ],
            link: "https://in.naver.com/anndam/contents/374643566568224?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC",
            images: [
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTlfMjEy%2FMDAxNjM3MzMzNDAzMDI4.mMpmTBIWVbMSCjpdONVt1smPPaDOLpPn_bmhygIhLSog.ifItPjhTDiQlAFyCCSIQ-xgISPrF1dach0u_bCL7_xIg.JPEG.anndam%2FIMG_9205.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTlfNyAg%2FMDAxNjM3MzMzNDAzMDM1.52hUIlm-N1PuzPz_2funInud0CmPpKaU7j9D1w198Swg.VQXD4Hr9ttDQHirubCE3u5EXZgh_4kcVxMoTJeApDcQg.JPEG.anndam%2FIMG_9220.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMjBfMjc2%2FMDAxNjM3NDEzMTcwNzM2.Ygc2ACW_ohCwICfgilR1RDLgEj7vKhN--479q2YQWHwg.4SwuAJ8Dg7uS2ahEAqZ5Z-5NJEBrjCXkmyEuwCs7xUYg.JPEG.anndam%2FIMG_9527.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMjBfMTI0%2FMDAxNjM3NDEzMTQyMjY5.Ymab111kwWdeKqOcbrEAYTrRVRRSIYnNRqSj0R-Qv8Ag.uIAHaQyDMSNrEubKxKCMJ8GvcB6aXlXR8jtRYGTLqfog.JPEG.anndam%2FIMG_9529.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMjBfMjc4%2FMDAxNjM3NDEzMTIzNzky.S90bYd9TIsvKkfUcZ9PvSKPvUy98bq-hGMAjx2fYA0Qg.2dAPziryX2I9s9H1Z1FMR26kDBLMdzqd1ml-AgDPEekg.JPEG.anndam%2FIMG_9530.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTlfMTgx%2FMDAxNjM3MzMzNDAzMzg2.a5xMwHyz1Qj-QUu6n2qogQxT6OJgA0l5Sx9dRkb2PEEg.iO6F2t-pH3508GaZCOs-HvnMHFp9AQ8EjMhGWbsdJGEg.JPEG.anndam%2FIMG_9532.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMjBfMTE2%2FMDAxNjM3NDEzMjA2MzUy.ThDueAdnhgtdah58AGo_6fEqMVK2ZYG47VQR0FtYYMwg.djBbuHV6XtCu2t_2NPT6eK7C1wtM5nshpla1-32khU0g.JPEG.anndam%2FIMG_9533.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTlfMjgx%2FMDAxNjM3MzMzNDAzNjg3.rnggsXs7qllbGBINfAbyaXcBOoC-jDjZCl0yEmP8jCog.su__DVcHqaHpepFqe6p9tf2rBA5eJw5TmtsV2QqNfp0g.JPEG.anndam%2FIMG_9538.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTlfODAg%2FMDAxNjM3MzMzNDAzODA3.Oi7qTfS5oXolu_tir9yYMlCHBTZJpDIEkalel7T58skg.aht172osyzf_XjBH4fxGYK4Ln6zRWWHQ12NdFrHlEFsg.JPEG.anndam%2FIMG_9540.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMjBfMjIy%2FMDAxNjM3NDEzMTA0MDk3.C510wYEUv9MFYMqNg3FZMEgCyzDLL7DE0ZulDcp8Le8g.2JLqQx4iyB9zNzorebw5LlaAktStjkXE7p2H97UCS9Qg.JPEG.anndam%2FIMG_9544.jpg%3Ftype%3Dw800&type=o372_192",
            ],
            description: {
              title: "가을 경주 가볼만한곳 토함산 불국사 단풍 명소 가을여행지",
              descriptionText:
                "가을 경주 가볼만한곳 토함산 불국사 단풍 명소 등 가을여행지 베스트5. 11월 경주 가을여행으로 다녀온 곳인데요. 불국사의 단풍은 올해도 어김없이 붉게 물들었어요. 11월 경주 단풍 명소를 찾아간 1박2일 여행....",
              date: "2021.11.25.",
              moreText: "의 참여 콘텐츠 2개 더보기",
              moreUrl:
                "https://in.naver.com/anndam/challenge/keyword/238641560492609?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC",
            },
          },
          {
            title: "국가대표윤",
            thumbnail: {
              image:
                "https://search.pstatic.net/common/?src=https%3A%2F%2Fhomebuilder-phinf.pstatic.net%2F%2FMjAyMTExMTNfMjE2%2FMDAxNjM2NzkwMjQ0MjM5.WfzlRkXc87FZKBP0QgL3aK21dpBp280E1VpwqP6jrzIg.nq7Bco5qz1bBcRR56kiE5f7yLxqICjUGFFZR4XPCypog.JPEG%2F1636790244165_1636789465797.jpg&type=f96_96",
              url: "https://in.naver.com/suk4408?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC",
              highlighted: "Silver",
            },
            subtitles: {
              title: "여행 전문블로거",
              fans: "팬 1.7만+",
              expertise: "국내 전문",
            },
            keywords: [
              {
                title: "이달의 블로그 (2020.8)",
                type: "Blog",
              },
              {
                key: "여행 스타일",
                value: "자연경관 선호",
              },
              {
                key: "창작 분야",
                value: "여행 분야 소식",
              },
            ],
            link: "https://in.naver.com/suk4408/contents/372519090869344?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC",
            images: [
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTdfMTIw%2FMDAxNjM3MTI2NzI0NTQy.0lkJt6xFESaftmEe0H8Gi0UgCVTHVwBan_R2e5cGqLAg.D2pKeCp1hyIRwSJHACJ5JMvhsYQUcFMwp1S6WKpHWbYg.JPEG.suk4408%2F1X5A3105_2.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTdfMTQz%2FMDAxNjM3MDc4MzAxODA1.49CJab8ke3SBdFpC2zQIvaX63sV0h_zFoKa5fFXfe7wg.koMOBF9xpsDZrm9QMw8HvXZZb2gUaon3P_wq8e5Sydcg.JPEG.suk4408%2F1X5A3101.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTdfMjMy%2FMDAxNjM3MDc4NDgxMzQ2.Xd2FWZSjkGYWkgnRJH9Vsy-5f-1st6yGbY1EcQlIPZsg.mMmUzI2_7KCH4PWqjlVHpIy8va47YaoelZhzSLHn-Fog.JPEG.suk4408%2F1X5A3175.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTdfMTYw%2FMDAxNjM3MDc4MzI0OTQ0.m0afkp5ysOJO6BPeYQ9eYcZ7hD_yXN7mp3PBviej6ugg.7yDizaBFGbzzhAeriJQVGaFX2HkwiCbWfgJgQXD1QoYg.JPEG.suk4408%2F1X5A3036.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTdfMTAz%2FMDAxNjM3MDc4MzMxMDAz.OMM2HTdtTzILSxwqnHVJeWS46ui8l2XcV1HjOZspq-Ag.oFmQK1PTaMNSy5nUBt2nvxdWmG9sAcyxVpLMsBIg_wog.JPEG.suk4408%2F1X5A3032.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTdfMTI5%2FMDAxNjM3MDc4MzEyNjcy.KxkTv1C2a9VtZQR5nYmym6COq66MVceX0n6-2PNlemgg.13Ll5hs0WHfNbSAmRf4dTRrXeIYy13y1iIcyJoi7n_kg.JPEG.suk4408%2F1X5A3225.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTdfNzYg%2FMDAxNjM3MDc4MzUyODY4.p0RZ_UIMyN6TMVoBtgEafYz1DeempdUUvPKcfKaw5ssg.d_brAbzLb0S47nR_VJO3rGK0NzjYUVAQluaWT6H422Ag.JPEG.suk4408%2F1X5A3039.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTdfOTAg%2FMDAxNjM3MDc4MzUzMTIy.NTxYMez-fd0WgQQi55BbEQOv2rvlUYObEzLFXyz-k7Mg.YEHblPf0S--ilsmMk3SXdmLy1kb_j-3MVjZGOFUsWDkg.JPEG.suk4408%2F1X5A3050.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTdfNDcg%2FMDAxNjM3MDc4MzUzMjcz.g6oRdzhUsZFs8ioCBr0IPDQjLfpGWIncNoQ8HVWcrHEg._tjy3EWT_qoWHhYmKTeZh9qrA1cL9ZbrkPYpXa7mWKUg.JPEG.suk4408%2F1X5A3060.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTdfMjE2%2FMDAxNjM3MDc4MzUzMjQ5.oC_ikwsQyt_z9RttUc1CNhKSlBOKjIeDCDsuJMxUNksg.DfKK0OyfKhut0TStFGzYiblZppvr7utQw6_UoAp9N4sg.JPEG.suk4408%2F1X5A3065.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTdfMjUg%2FMDAxNjM3MDc4MzUzMjYw.Y99R4Ab7hKJfDRjO4IL1qiJ5vNPu2Aza1MRrZMBiiv4g.hk1tAbkD8LUPgZs0nVBdx591MTumSXcghdqAsMwqTfIg.JPEG.suk4408%2F1X5A3068.jpg%3Ftype%3Dw800&type=o372_192",
            ],
            description: {
              title: "가을 단풍 명소 경주 불국사 단풍 볼거리 경주역사여행",
              descriptionText:
                "가을 단풍 명소 경주 불국사 단풍 볼거리 경주역사여행 경북 경주시 진현동 15 /054-746-9913 /입장료 6,000원, 초등 3,000원 (주차료 1,000원) 며칠 전 다녀온 1박 2일 경주 여행은 단풍 예쁜 장소들만 골라 다녀온 가을...",
              date: "2021.11.19.",
              moreText: "의 참여 콘텐츠 1개 더보기",
              moreUrl:
                "https://in.naver.com/suk4408/challenge/keyword/238641560492609?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC",
            },
          },
          {
            title: "초롱둘",
            thumbnail: {
              image:
                "https://search.pstatic.net/common/?src=https%3A%2F%2Fphinf.pstatic.net%2Fcontact%2Fprofile%2Fblog%2F39%2F56%2Fkji206.jpg&type=f96_96",
              url: "https://in.naver.com/kji206?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC",
              highlighted: "Bronze",
            },
            subtitles: {
              title: "여행 작가",
              fans: "팬 1.3만+",
              expertise: "국내 전문",
            },
            keywords: [
              {
                title: "도서 출간 2권",
                type: "None",
              },
              {
                key: "여행 스타일",
                value: "자연경관 선호",
              },
              {
                key: "창작 분야",
                value: "여행 리뷰",
              },
            ],
            link: "https://in.naver.com/kji206/contents/371810585653344?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC",
            images: [
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTZfMTM0%2FMDAxNjM2OTkyMzk5NjEw.HgOzJNuGhb4odF1j0NBdMYR4cr1UQozF0P6ws4qzQQMg.sEASJOFJNmM45EqgUIOeymHYTmJxlq9YC6NXqxYkVUEg.JPEG.kji206%2F1.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTZfMTUx%2FMDAxNjM2OTkyMzk5NDI1.GgpqmGTC6U3EH4YZZlP1PPmi4YtHm2nOWWOMgPgdKrcg.7FlXJEcc3_E60sD1c3dOHrKXx8T4OjzZ_kK9pzY2cr4g.JPEG.kji206%2FDSC04422.JPG%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTZfNjcg%2FMDAxNjM2OTkyMzk5NTA1.5jPd2VbSJOkQhl_6SVQnYarrIduWX7lQpaP0sNv7l64g.KXOBG9ymz7RYmWcFgBfjtul_YMbGoKZdkFJcStLs_Ckg.JPEG.kji206%2FDSC04424.JPG%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTZfNjAg%2FMDAxNjM2OTkyMzk5Njg2.GTp3qkVTLNjbGUKonmRJVq2Lul9yo65JL4f2lLWg9Zog.Vx-Ia3o-CwRJ03JgsJEBEmWUW_SIhP1WX73_DVpMTrYg.JPEG.kji206%2FDSC04429.JPG%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTZfMjUg%2FMDAxNjM2OTkyMzk5NjQx.yD1I4DdFb99euqwtbNoAzAX_z3u34JECEBa94iPfZXEg.VtHkcHC8f7qF4cSwsgr6p3nKMzQopdvrAufVrvL9t1Ig.JPEG.kji206%2FDSC04430.JPG%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTZfNiAg%2FMDAxNjM2OTkyMzk5NjEy.sDTzCbciIWf5TdObaCIJ4TkyY0wL7EQLndfejDgZUykg.cmkXMBVyAWJQE63Pkh3kRIqFEVAOXdVGrSpfKqXksZwg.JPEG.kji206%2FDSC04434.JPG%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTZfMzIg%2FMDAxNjM2OTkyMzk5ODU1.LgbjpQfwVcpzdHsPXaVhTbtWt2H5gwBbS-R66ngfDX4g.hELblTsiN3q_zQuPEDRC-CFw8Vbm5Vg0oxrDXXKVVKcg.JPEG.kji206%2FDSC04436.JPG%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTZfMTI4%2FMDAxNjM2OTkyMzk5OTg1.-921DtjGZDFLrt7yEeTynYWcRPJjCCcX6m5Y-i2QsFMg.zcQvJ5cR97gDJTnhUdHXAu5wxG2gY4BX_JiYz-NZJu0g.JPEG.kji206%2FDSC04449.JPG%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTZfODcg%2FMDAxNjM2OTkyNDAwMjQz.oXFK8U9_4ZgFhQAUITIMBsfmV0z-sRXkek4bY4fAcKsg.K-c9n8IE1fSwCOnnRqBXR8uJyAIrz4ocdSzsIU9zh7cg.JPEG.kji206%2FDSC04459.JPG%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTZfMTk1%2FMDAxNjM2OTkyNDAwODMz.z87Y5Ql63LK4U_zNgnyJ2-2rrRiOMK8ov5LHP79BA9Qg.BTsumRaHwjekB-ABM0YJs-dkIppdjRIP-8OqPgImYW8g.JPEG.kji206%2FDSC04475.JPG%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTExMTZfMjU0%2FMDAxNjM2OTkyNDAyNDQz.tAAbhSkoNl-Ha1GcWctw4EPgZNpr0RYfkPfx4EY93akg.3U3X2JK-f729IKSAk7yctjP6vFZ9xPfIq2U3NnwxLeQg.JPEG.kji206%2FDSC07344.JPG%3Ftype%3Dw800&type=o372_192",
            ],
            description: {
              title: "경북 드라이브 코스 경주 불국사 석굴암 외",
              descriptionText:
                "경북 드라이브 코스 경주 불국사 석굴암 외 이번 경주여행은 1박2일하면서 시내권 보다는 단풍이 예쁜 불국사와 도리마을과 용담정등 외곽쪽으로 돌았다. 그래서 복잡하지 않고 고운 경주의 가을을 만났다. 불국사와...",
              date: "2021.11.17.",
              moreText: "의 참여 콘텐츠 3개 더보기",
              moreUrl:
                "https://in.naver.com/kji206/challenge/keyword/238641560492609?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC",
            },
          },
        ],
        influencerLink: {
          text: "인플루언서 더보기 ",
          href: "https://m.search.naver.com/search.naver?query=%EC%83%B4+%EA%B3%A0%EC%96%91%EC%9D%B4&sm=mtb_nmr&where=m_influencer",
        },
      },
      news: {
        colorScheme: {
          main: "#3d92ff",
          border: "rgba(61,146,255,.2)",
          circleColor: "rgba(135,142,154,0.3)",
          circleHover: "#9fa4aa",
        },
        header: {
          title: "뉴스",
          condition: "관련도순",
          subcondition: {
            href: "https://m.search.naver.com/search.naver?where=m_news&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC&sm=mtb_opt&sort=1&photo=0&field=0&pd=0&ds=&de=&docid=&related=0&mynews=0&office_type=0&office_section_code=0&news_office_checked=&nso=so%3Add%2Cp%3Aall&is_sug_officeid=0",
            text: "최신순",
          },
        },
        list: [
          {
            blog: {
              src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fwww.kbsm.net%2Ffavicon.ico&type=f54_54&expire=24&refresh=true",
              title: "경북신문",
              influencer: "false",
              time: "1일 전",
              href: "http://www.kbsm.net/",
            },
            body: {
              title: "경주경찰서, 보이스피싱 예방 은행원에 감사장 수여",
              detail:
                "경주경찰서는 불국사농협 진현지점에서 보이스피싱 범죄 의심 신고를 통해 현금 2000만원의 피해를 예방한 은행원 A(39)씨에게 감사장을 수여했다고 6일 밝혔다.지난달 2일 오후 2시께 B(55)씨는 상환용 대출 보이스피싱에 속아 기존대출금 상환을 위한 돈을 빌려달라는 사위의 부탁을 받고...",
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F5533%2F2021%2F12%2F06%2F152104.jpg&type=ofullfill174_174&expire=2&refresh=true",
              href: "http://www.kbsm.net/default/index_view_page.php?idx=331475&part_idx=320",
            },
          },
          {
            blog: {
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fmimgnews.pstatic.net%2Fimage%2Fupload%2Foffice_logo%2F032%2F2018%2F10%2F11%2Flogo_032_18_20181011174611.png&type=f54_54&expire=24&refresh=true",
              title: "경향신문",
              influencer: "false",
              time: "2일 전",
              href: "https://media.naver.com/press/032",
            },
            body: {
              title: "경주 강변로 완전 개통···경주IC~천북교차로 총길이 10㎞",
              detail:
                "지금까지 금성삼거리와 황남주민센터 사거리 일대는 경주IC를 빠져나와 시외·고속버스 터미널로 운행하는 차량들과 첨성대·대릉원·오릉·보문단지·불국사 등 유적관광지로 운행하는 차량들이 뒤엉켜 상습 정체를 빚는 등 시민과 관광객의 교통불편이 컸다. 경주시는 강변로 완전...",
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F032%2F2021%2F12%2F05%2F3114323.jpg&type=ofullfill174_174&expire=2&refresh=true",
              href: "https://m.news.naver.com/read?mode=LSD&mid=sec&sid1=102&oid=032&aid=0003114323",
            },
          },
          {
            blog: {
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fmimgnews.pstatic.net%2Fimage%2Fupload%2Foffice_logo%2F022%2F2017%2F01%2F05%2Flogo_022_18_20170105111205.png&type=f54_54&expire=24&refresh=true",
              title: "세계일보",
              influencer: "false",
              time: "2021.11.24.",
              href: "https://media.naver.com/press/022",
            },
            body: {
              title: "코로나19 이후 첫 외국인 단체 관광객, 경주 불국사 등 방문",
              detail:
                "싱가포르 관광객들이 경주 불국사 앞에서 기념촬영을 하고있다. 지난해 2월 코로나19 사태 이후 처음으로 외국인 단체 관광객이 경북을 방문해 눈길을 끌었다. 23일 경북도문화관광공사에 따르면 싱가포르 단체 관광객 약 20명이 지난 19일과 20일 이틀간 경주 대릉원, 첨성대, 석굴암, 불국사...",
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F022%2F2021%2F11%2F24%2F3640940.jpg&type=ofullfill174_174&expire=2&refresh=true",
              href: "https://m.news.naver.com/read?mode=LSD&mid=sec&sid1=102&oid=022&aid=0003640940",
            },
          },
          {
            blog: {
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fmimgnews.pstatic.net%2Fimage%2Fupload%2Foffice_logo%2F003%2F2019%2F02%2F19%2Flogo_003_18_20190219111719.jpg&type=f54_54&expire=24&refresh=true",
              title: "뉴시스",
              influencer: "false",
              time: "2021.11.18.",
              href: "https://media.naver.com/press/003",
            },
            body: {
              title: "경북도, 중국인 유학생 초청 안동~경주 팸투어",
              detail:
                "이번 팸투어는 ▲경북도청 동락관의 경북도-허난성 국제미술교류전 참관 ▲안동 하회마을, 월영교 및 낙강물길 공원 방문 ▲경주 대릉원, 첨성대, 불국사 방문 및 경주빵 만들기 체험 등으로 이뤄졌다. 이번 팸투어 참가자는 경북대, 계명대, 대구보건대, 대구카톨릭대, 영진전문대에 재학 중인...",
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F003%2F2021%2F11%2F18%2F10840961.jpg&type=ofullfill174_174&expire=2&refresh=true",
              href: "https://m.news.naver.com/read?mode=LSD&mid=sec&sid1=102&oid=003&aid=0010840961",
            },
          },
        ],
        newsLink: {
          text: "뉴스 더보기 ",
          href: "https://m.search.naver.com/search.naver?where=m_news&sm=mtb_jum&query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC",
        },
      },
    },
    sham: {
      keyword: "샴고양이",
      order: ["mainCard", "influencers", "view", "news"],
      mainCard: {
        title: {
          name: "샴(샤미즈)",
          type: "동물",
          subName: "Siamese cat",
        },
        colorScheme: {
          background: "#f4f3f0",
          topBorder: "#e2dad1",
          subTitle: "rgba(145, 118, 89, 0.8)",
          subTapColor: "#9f8669",
          subTapBar: "rgba(166, 143, 116, 0.3)",
          circleColor: "rgba(166, 143, 116, 0.5)",
          circleHover: "#a68f74",
        },
        subTap: {
          mainTap: {
            title: "전체",
            order: "first",
          },
          list: [
            {
              title: "기본정보",
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%EA%B8%B0%EB%B3%B8%EC%A0%95%EB%B3%B4",
            },
            {
              title: "포토",
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%8F%AC%ED%86%A0",
            },
            {
              title: "함께 찾은 품종",
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%95%A8%EA%BB%98%20%EC%B0%BE%EC%9D%80%20%ED%92%88%EC%A2%85",
            },
          ],
        },

        common: {
          mainImage: {
            src: "https://search.pstatic.net/common?type=f&size=518x522&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201227_280%2F1609068536458M5qWj_JPEG%2F45204144294873432_1454722539.jpg",
            href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%8F%AC%ED%86%A0",
          },
          smallImage: {
            list: [
              {
                src: "https://search.pstatic.net/common?type=f&size=260x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20180409_16%2Ftttl96_1523236149232DtdDB_JPEG%2F57274255118854483_1696344960.jpeg",
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%8F%AC%ED%86%A0",
              },
              {
                src: "https://search.pstatic.net/common?type=f&size=260x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200514_296%2F1589383522415fQAKv_JPEG%2F25519140244964356_836593714.jpg",
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%8F%AC%ED%86%A0",
              },
              {
                src: "https://search.pstatic.net/common?type=f&size=260x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210110_122%2F1610234036128HMFyn_JPEG%2F46369644538410444_1768298021.jpg",
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%8F%AC%ED%86%A0",
              },
              {
                src: "https://search.pstatic.net/common?type=f&size=260x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200401_297%2F1585705167644lVwso_JPEG%2F21840784152777463_-1772690182.jpg",
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%8F%AC%ED%86%A0",
              },
              {
                src: "https://search.pstatic.net/common?type=f&size=258x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200107_100%2F1578368791570mWnGL_JPEG%2F14504400424424331_693284119.jpg",
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%8F%AC%ED%86%A0",
              },
              {
                src: "https://search.pstatic.net/common?type=f&size=260x260&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210722_241%2F1626949212669ih9J4_JPEG%2F63084821814135149_1699451494.jpeg",
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%8F%AC%ED%86%A0",
              },
            ],
          },
          basicInfo: {
            title: "기본정보",
            href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%EA%B8%B0%EB%B3%B8%EC%A0%95%EB%B3%B4",
            detail:
              "성격이 독특하면서도 영리하고 애정이 깊다. 감수성도 예민해 공격적이거나 신경질적인 반응을 보이기도 하고, 자기 과시욕을 드러내면서 언제나 주인의 관심을 끌려고 하기 때문에 안아주거나 쓰다듬어 주는 것을 좋아한다. ",
            moreDetails:
              "https://terms.naver.com/entry.naver?docId=1110852&cid=40942&categoryId=32624",
          },
        },

        similar: {
          header: {
            title: "함께 찾은 품종",
            href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjFH&x_csa=%7B%22theme%22%3A%22pet%22%2C%20%22pkid%22%3A%22605%22%7D&pkid=605&os=13842686&qvt=0&query=%EC%83%B4(%EC%83%A4%EB%AF%B8%EC%A6%88)%20%ED%95%A8%EA%BB%98%20%EC%B0%BE%EC%9D%80%20%ED%92%88%EC%A2%85",
          },
          list: [
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200404_26%2F1585927365775bRHz7_JPEG%2F22062982153525771_563887820.jpg",
              title: "페르시안",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC+%ED%95%A8%EA%BB%98+%EC%B0%BE%EC%9D%80+%EB%AC%B8%ED%99%94%EC%9E%AC&tqi=hj4d5dprvRGssNqU4FwssssstX4-039536&query=%ED%8E%98%EB%A5%B4%EC%8B%9C%EC%95%88",
            },

            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200211_31%2F15813769677674O1jm_JPEG%2F17494093570992638_-2015122258.jpg",
              title: "터키시앙고라",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%ED%8E%98%EB%A5%B4%EC%8B%9C%EC%95%88&tqi=hj4dqlprvRGssNkPZHwssssstXG-133498&query=%ED%84%B0%ED%82%A4%EC%8B%9C%EC%95%99%EA%B3%A0%EB%9D%BC",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210420_66%2F1618904982543B0DMt_JPEG%2F56751inbound3624853760158885307.jpg",
              title: "코리안쇼트헤어",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%ED%84%B0%ED%82%A4%EC%8B%9C%EC%95%99%EA%B3%A0%EB%9D%BC&tqi=hj4d2lprvRGssNoyu8hssssstJV-293494&query=%EC%BD%94%EB%A6%AC%EC%95%88%EC%87%BC%ED%8A%B8%ED%97%A4%EC%96%B4",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210419_229%2F16188387804943w6Gi_JPEG%2F54974378374701201_-1400302756.jpeg",
              title: "아비시니안",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EC%BD%94%EB%A6%AC%EC%95%88%EC%87%BC%ED%8A%B8%ED%97%A4%EC%96%B4&tqi=hj4dIwprvRGssNAXD90ssssssBs-173980&query=%EC%95%84%EB%B9%84%EC%8B%9C%EB%8B%88%EC%95%88",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210428_100%2F1619579011968iOvwG_JPEG%2F521691553955926931.jpg",
              title: "아메리칸쇼트헤어",
              href: "https://m.search.naver.com/search.naver?sm=mtb_sug.search&where=m&oquery=%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EC%87%BC%ED%8A%B8%ED%97%A4%EC%96%B4&tqi=hj4eadprvRGssNYHtx4ssssstyV-304527&query=%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B8%EC%87%BC%ED%8A%B8%ED%97%A4%EC%96%B4&acq=%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EC%87%BC%ED%8A%B8%ED%97%A4%EC%96%B4&acr=2&qdt=0",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200209_214%2F1581229340435aTrFL_JPEG%2F336871579074606436.jpg",
              title: "스핑크스",
              href: "https://m.search.naver.com/search.naver?sm=mtb_sug.top&where=m&oquery=%EC%8A%A4%ED%95%91%ED%81%AC%EC%8A%A4&tqi=hj4ejsprvRGssNGvFj8ssssstl0-094731&query=%EC%8A%A4%ED%95%91%ED%81%AC%EC%8A%A4+%EA%B3%A0%EC%96%91%EC%9D%B4&acq=%EC%8A%A4%ED%95%91%ED%81%AC%EC%8A%A4&acr=2&qdt=0",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200417_12%2F1587097896420NMF0k_JPEG%2F23233512751650562_-497029573.jpeg",
              title: "스코티시폴드",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EC%8A%A4%ED%95%91%ED%81%AC%EC%8A%A4+%EA%B3%A0%EC%96%91%EC%9D%B4&tqi=hj4ejwprvRGssNVBf0Vssssstdh-514505&query=%EC%8A%A4%EC%BD%94%ED%8B%B0%EC%8B%9C%ED%8F%B4%EB%93%9C",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200410_88%2F1586528677443mWmL3_JPEG%2F22664286438461903_1995956204.jpeg",
              title: "브리티시쇼트헤어",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EC%8A%A4%EC%BD%94%ED%8B%B0%EC%8B%9C%ED%8F%B4%EB%93%9C&tqi=hj4eQdprvRGssNG5ov4ssssssv0-202265&query=%EB%B8%8C%EB%A6%AC%ED%8B%B0%EC%8B%9C%EC%87%BC%ED%8A%B8%ED%97%A4%EC%96%B4",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20201214_149%2F1607923841240cr73r_JPEG%2F44059437129620739_279034542.jpg",
              title: "뱅갈",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%B8%8C%EB%A6%AC%ED%8B%B0%EC%8B%9C%EC%87%BC%ED%8A%B8%ED%97%A4%EC%96%B4&tqi=hj4eAlprvRGssNxc44KssssssSs-032689&query=%EB%B1%85%EA%B0%88",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200229_125%2F15829517228846MU0i_JPEG%2F19087320512185316_-1365682391.jpeg",
              title: "먼치킨",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%B1%85%EA%B0%88&tqi=hj4eDsprvRGssNEu2lNssssssVK-381807&query=%EB%A8%BC%EC%B9%98%ED%82%A8",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200314_158%2F15841507513157jLbn_JPEG%2F20286360954779067_944745824.jpeg",
              title: "러시안블루",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%A8%BC%EC%B9%98%ED%82%A8&tqi=hj4eqlprvRGssNIy2kZssssssJ8-324396&query=%EB%9F%AC%EC%8B%9C%EC%95%88%EB%B8%94%EB%A3%A8",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210430_26%2F1619734359178HggHS_JPEG%2F55869975744703816_1166239455.jpeg",
              title: "랙돌",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%9F%AC%EC%8B%9C%EC%95%88%EB%B8%94%EB%A3%A8&tqi=hj4eWwprvRGssN8ssh8ssssss3h-292704&query=%EB%9E%99%EB%8F%8C",
            },
            {
              src: "https://search.pstatic.net/common?type=f&size=174x174&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20190830_134%2F15671596689398dlKe_JPEG%2F3295265083785307_-72202893.jpg",
              title: "노르웨이숲고양이",
              href: "https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%9E%99%EB%8F%8C&tqi=hj4ewwprvRGssN1FiXVssssssU0-217543&query=%EB%85%B8%EB%A5%B4%EC%9B%A8%EC%9D%B4%EC%88%B2%EA%B3%A0%EC%96%91%EC%9D%B4",
            },
          ],
        },
      },
      view: {
        header: {
          title: "VIEW",
        },
        colorScheme: {
          circleColor: "rgba(135,142,154,0.3)",
          circleHover: "#9fa4aa",
        },
        list: [
          {
            blog: {
              src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogpfthumb.phinf.naver.net%2FMjAyMTAyMDNfMjky%2FMDAxNjEyMzM2NTY4NzA2.fo-KxpG1dxa_RQqlepV7k_ANF_W8SL6FrEFWfiidhjwg.bFWiSyH0sQX-0vdSxOWKnbHheAGSOithDLVinEQ_nocg.JPEG.yarolove%2F%2525EA%2525B9%252580%2525EC%25258B%2525A4%2525EC%25259E%2525A5.JPG&type=f54_54",
              title: "교육정보 캐며 요리하는 주부KIM실장",
              influencer: "false",
              time: "2021.03.15.",
              href: "https://m.blog.naver.com/yarolove",
            },
            body: {
              title: "샤미즈 샴고양이 특성과 예민하게 화장실 사용하는 로브",
              detail:
                "저희 집에는 똑똑이 샤미즈 샴고양이 로브도 있거든요. 오늘은 로브를 소개할게요. 화장실 쓰는 게 너무 귀여워서 올려봐요. 샴고양이 샤미즈 샤미즈가 샴고양이 맞아요. 샴고양이...",
              src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMTVfNzQg%2FMDAxNjE1ODAzMTQ4ODkz.jgUwcx6sLi2nm7RUUaKxiiZsUgA8jb5J6avOYJygNM4g.reFXgjXYUCqV3JfRGV0m499pzsi2OilKejwgcaAdiGAg.JPEG.yarolove%2F1615645073916%25A3%25AD7.jpg%23900x900&type=ff192_192",
              href: "https://m.blog.naver.com/yarolove/222276544963",
            },
            tags: {
              list: [
                {
                  title: "샴고양이",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4",
                },
                {
                  title: "샤미즈",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%83%A4%EB%AF%B8%EC%A6%88",
                },
                {
                  title: "샴고양이성격",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4%EC%84%B1%EA%B2%A9",
                },
              ],
            },
            link: {
              text: "샤미즈 & 브숏 급조한 장난감으로 사냥놀이 했어요~(#브숏 #샤미즈)",
              href: "https://m.blog.naver.com/yarolove/222229343444",
            },
          },

          {
            blog: {
              src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogpfthumb.phinf.naver.net%2FMjAyMDAxMjlfMjk0%2FMDAxNTgwMzA4NTUwOTcy.j3XSja3O6VEhrKXVBBnQku-olRGK2eTxbytzH37zZCgg._bshTC1PL-UelYmJsabgGCbNYSvVcIRGcIViObDwdysg.JPEG.nice_pet%2FKakaoTalk_20200127_215943303.jpg&type=f54_54",
              title: "The 착한애견",
              influencer: "false",
              time: "2020.02.13.",
              href: "https://m.blog.naver.com/nice_pet",
            },
            body: {
              title: "<부산고양이분양> 샴 고양이 분양 / 샤미즈",
              detail:
                "The착한애견> #부산고양이분양 #부산고양이 #부산샴분양 #샴고양이분양 #개냥이 #샤미즈 #샴고양이성격 #샴고양이 #샴분양 #고양이분양 고양이의 대명사 !!! 바로 샴 (샤미즈) 고양이가...",
              src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAyMThfMjgw%2FMDAxNTgyMDE0NDE5Mjc1.mxgjMrcpqw4q7x01Dgv0q9qqQMdmizbQLCqT-58VhHwg.WOlHe3AtIj4giYXfULLtf_JUtc-kx8kjC57Yfia0ow0g.JPEG.nice_pet%2FKakaoTalk_20200212_163625126_05.jpg%23600x600&type=ff192_192",
              href: "https://m.blog.naver.com/nice_pet/221807969253",
            },
            tags: {
              list: [
                {
                  title: "부산고양이분양",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EB%B6%80%EC%82%B0%EA%B3%A0%EC%96%91%EC%9D%B4%EB%B6%84%EC%96%91",
                },
                {
                  title: "부산고양이",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EB%B6%80%EC%82%B0%EA%B3%A0%EC%96%91%EC%9D%B4",
                },
                {
                  title: "부산샴분양",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EB%B6%80%EC%82%B0%EC%83%B4%EB%B6%84%EC%96%91",
                },
                {
                  title: "샴고양이분양",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4%EB%B6%84%EC%96%91",
                },
                {
                  title: "개냥이",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EA%B0%9C%EB%83%A5%EC%9D%B4",
                },
                {
                  title: "샤미즈",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%83%A4%EB%AF%B8%EC%A6%88",
                },
                {
                  title: "샴고양이성격",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4%EC%84%B1%EA%B2%A9",
                },
                {
                  title: "샴고양이",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4",
                },
                {
                  title: "샴분양",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%83%B4%EB%B6%84%EC%96%91",
                },
                {
                  title: "고양이분양",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EA%B3%A0%EC%96%91%EC%9D%B4%EB%B6%84%EC%96%91",
                },
              ],
            },
            link: {
              text: "샤미즈 & 브숏 급조한 장난감으로 사냥놀이 했어요~(#브숏 #샤미즈)",
              href: "https://m.blog.naver.com/yarolove/222229343444",
            },
          },
        ],
      },
      influencer: {
        colorScheme: {
          main: "#c27636",
          border: "rgba(194,118,54,.2)",
        },
        header: {
          title: "인플루언서",
          subtitle: {
            href: "https://in.naver.com/",
            text: "서비스 홈 바로가기",
          },
        },
        "tab-lists": [
          {
            title: "전체",
            subtitle: "27명",
          },
          {
            title: "펫 전문블로거",
            subtitle: "19명",
            image:
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fblogpfthumb-phinf.pstatic.net%2F20151114_15%2Fpjh731_1447487938037uCc2H_JPEG%2F%EC%9B%B9%ED%88%B0-0001+%EC%82%AC%EB%B3%B8-161px.JPG&type=f76_76",
            url: "https://m.search.naver.com/search.naver?query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4&where=m_influencer&x_influencer=%7B%22filters%22%3A%7B%22majorSubject%22%3A%22241109824810304%22%2C%22minorSubject%22%3A%22%22%2C%22gender%22%3A%22%22%2C%22generation%22%3A%22%22%2C%22channel%22%3A%22%22%7D%7D",
          },
          {
            title: "동물행동 전문가",
            subtitle: "5명",
            image:
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fhomebuilder-phinf.pstatic.net%2F%2FMjAyMTA3MDhfMjY5%2FMDAxNjI1NzEwMDU0MjM0.cNGXtMguO2Ha-ZT0AGr0XKwWIYEwhf3l4x2F2Kb1knsg.PsYGDYqbrMHckPhsSPPHDuOHleRPUJe1HCtg1u1pua8g.JPEG%2F1625710054083_20210528_170020.jpg&type=f76_76",
            url: "https://m.search.naver.com/search.naver?query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4&where=m_influencer&x_influencer=%7B%22filters%22%3A%7B%22majorSubject%22%3A%22241109837118784%22%2C%22minorSubject%22%3A%22%22%2C%22gender%22%3A%22%22%2C%22generation%22%3A%22%22%2C%22channel%22%3A%22%22%7D%7D",
          },
          {
            title: "펫 매거진에디터",
            subtitle: "2명",
            image:
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fhomebuilder-phinf.pstatic.net%2F%2FMjAyMTAzMTJfMTY5%2FMDAxNjE1NTMwMjI4Mzkz.uzJmrMSYH7NBK-gqqE8udL2iwBkiI-GMyJrxUpnz-8Ig.VaNTYG0-td7bkiZq1h8hBlpnhOPoHKbH1VdshMpfywcg.JPEG%2F1615530228374_%25EC%259D%25B8%25ED%2594%258C%25EB%25A3%25A8%25EC%2596%25B8%25EC%2584%259C-%25EB%25A1%259C%25EA%25B3%25A0.jpg&type=f76_76",
            url: "https://m.search.naver.com/search.naver?query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4&where=m_influencer&x_influencer=%7B%22filters%22%3A%7B%22majorSubject%22%3A%22241109837131072%22%2C%22minorSubject%22%3A%22%22%2C%22gender%22%3A%22%22%2C%22generation%22%3A%22%22%2C%22channel%22%3A%22%22%7D%7D",
          },
          {
            title: "펫 영상크리에이터",
            subtitle: "1명",
            image:
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fblogpfthumb-phinf.pstatic.net%2F20150220_255%2Fwedcats_1424411740893SeHzJ_JPEG%2F%EB%84%A4%EC%9D%B4%EB%B2%84+%EB%B8%94%EB%A1%9C%EA%B7%B8+%EC%84%AC%EB%84%A4%EC%9D%BC.jpg&type=f76_76",
            url: "https://m.search.naver.com/search.naver?query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4&where=m_influencer&x_influencer=%7B%22filters%22%3A%7B%22majorSubject%22%3A%22241109824818496%22%2C%22minorSubject%22%3A%22%22%2C%22gender%22%3A%22%22%2C%22generation%22%3A%22%22%2C%22channel%22%3A%22%22%7D%7D",
          },
        ],
        influencers: [
          {
            title: "유언님",
            thumbnail: {
              image:
                "https://search.pstatic.net/common/?src=https%3A%2F%2Finfluencer-phinf.pstatic.net%2FMjAyMDA1MTNfMjMg%2FMDAxNTg5MzQ3NTc1MDQ5.WkI5HXbKyXKqM3wJtkct93e6I4hekwaV9xBgU3QibHEg._QKip8FxFmMVFRmkiPBoIu3AKak3U2SS_AxM7Dpzc80g.JPEG%2FScreenshot_20200512-192157_Instagram.jpg&type=f96_96",
              url: "https://in.naver.com/yourns?query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4",
              highlighted: "Gold",
            },
            subtitles: {
              title: "펫 전문블로거",
              fans: "팬 1.4만+",
              expertise: "강아지 전문",
            },
            keywords: [
              {
                title: "블로그 이웃 5,200+",
                type: "Blog",
              },
              {
                key: "대표 반려동물",
                value: "제페니스 스피츠 반려중 (2014년생)",
              },
              {
                key: "반려 스타일",
                value: "여러 종 반려 중",
              },
              {
                key: "창작 분야",
                value: "전문지식",
              },
            ],
            link: "https://in.naver.com/yourns/contents/358676073911072?query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4",
            images: [
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMTBfMTYg%2FMDAxNjMzODY4MDY5NjY2.gPYKMf9UDa94fVLizkwFOLbX3cM_7DJbLmic9C0mvzAg.6Uvu_jLr7bLR4405PhlHE8ZlMV278BhuJzzudlceXTcg.PNG.yourns%2F1.png%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMTBfMjc5%2FMDAxNjMzODY4MTM3NTg5.55u3BcNCE2G1qbDUY6DVDqqESZPnkVQv4e0lQxXx04og.YKhF5Rc1Ic33hAnkwjPmKbf6urB2h4AKhNB25Gwrhh0g.PNG.yourns%2F3.png%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMTBfMjgz%2FMDAxNjMzODY4MTM4ODY0.KEfRZjiJLwpQL6CToCWa9e0GM3n21ElM92g75Eqcue8g.NcfZalQWwk7jCwhYHbosjNajLOzo5_R8QxwRj2hhe_4g.PNG.yourns%2F7.png%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMTBfMTU1%2FMDAxNjMzODY4MTQwMDAz.kEdl-8S6h7XeVS9Zt1VS9aT90wVPXcHfSnCPCm5vgLQg.H9m0MFBOKVdiKi-OWxX7GawpFBpx8aSSEzdDLY3A6tcg.PNG.yourns%2F5.png%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMTBfMjMx%2FMDAxNjMzODY4MTQxNDMz.mSLWXn8CDGb2H2ZQfQ1LeOSstQCxmME7bzqWysP24sUg.ow2tOtftmNLpGDb7dicgrmulLV33kZ8rJbzz116Sj5Qg.PNG.yourns%2F4.png%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMTBfMjAw%2FMDAxNjMzODY4MTQzMzA2.PQ6LJu2qR2rkBvHbiM-kt6WOKRejWZ88I2xo5HRSmYog.jWRP0b-wA8lvlWk_Q0gdMEhq1wJmO9v_TaGtdBgWoPgg.PNG.yourns%2F2.png%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMTBfMTEw%2FMDAxNjMzODY4MTQ0NDM1.EDS6OYViQqisrXzdfD30I8WT0wLuHYeFrEGyht1B2Wwg.pTagK82ip2e86ppGKke9dRWpGDaUzq95moC2_17DV60g.PNG.yourns%2F6.png%3Ftype%3Dw800&type=o372_192",
            ],
            description: {
              title: "태국 왕실묘 출신 샴 고양이 성격이 말썽쟁이 품종이라고?",
              descriptionText:
                "이번에 소개하는 고양이 품종은 태국 왕실묘 출신의 샴 고양이로 성격과 함께 신비로운 외모에 대해서 알아보도록 하겠습니다. 실제로 샴 고양이는 신비롭고 이쁜 포인트 컬러의 외모가 특징이라 매우 귀여우면서도...",
              date: "2021.10.10.",
              moreText: "의 참여 콘텐츠 3개 더보기",
              moreUrl:
                "https://in.naver.com/yourns/challenge/keyword/143830097674240?query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4",
            },
          },
          {
            title: "독티처",
            thumbnail: {
              image:
                "https://search.pstatic.net/common/?src=https%3A%2F%2Fhomebuilder-phinf.pstatic.net%2F%2FMjAyMTA3MDhfMjY5%2FMDAxNjI1NzEwMDU0MjM0.cNGXtMguO2Ha-ZT0AGr0XKwWIYEwhf3l4x2F2Kb1knsg.PsYGDYqbrMHckPhsSPPHDuOHleRPUJe1HCtg1u1pua8g.JPEG%2F1625710054083_20210528_170020.jpg&type=f96_96",
              url: "https://in.naver.com/dogteacher?query=%EC%83%B4+%EA%B3%A0%EC%96%91%EC%9D%B4",
              highlighted: "Silver",
            },
            subtitles: {
              title: "동물행동 전문가",
              fans: "팬 1.6만+",
              expertise: "강아지 전문",
            },
            keywords: [
              {
                title: "유튜브 구독 1만+",
                type: "YouTube",
              },
              {
                key: "관련 사업 운영/소속",
                value: "관련 사업 운영/소속 1개",
              },
              {
                key: "방송 출연",
                value: "방송 출연 5회",
              },
              {
                key: "반려 스타일",
                value: "여러 마리 반려 중",
              },
            ],
            link: "https://in.naver.com/dogteacher/contents/362583857801216?query=%EC%83%B4+%EA%B3%A0%EC%96%91%EC%9D%B4",
            images: [
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMjFfNDYg%2FMDAxNjM0ODA0MTQ4NDI5.FM4tZ_c8ckas062CPOJZn3npBUKEylk_C42pBmpY0gcg.VT7OycOORRoHgyAPlO6vAFUnqvEuAlhkznubUmmKEmsg.GIF.lbygns12%2Fse3%25A3%25DFani%25A3%25DF1634804121494%25A3%25DFa.gif%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMjFfMTE3%2FMDAxNjM0ODA0MTQ2MjY4._5W6LC3rPQ6lo8iHvzoWSBs8-rTMsD-u03zuMwzQOR4g.tKDEEAN6LxBQ49mYZun3-hXizsEudcg_mMO3kOf-Llog.JPEG.lbygns12%2F1634804093048.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMjFfMyAg%2FMDAxNjM0ODA0MTQ2ODI0.rXMSz5Na4KdvsdxlnFFyQtd01SEpYz42xDiKKJ76Ilkg.xMrmwFp6n-Y_pKYuBqKac01W4BWOJfT3VaTDKjyfnlwg.JPEG.lbygns12%2F1634804092853.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMjFfMzEg%2FMDAxNjM0ODA0MTQ3Mzg0.IQV7b5TEKIcXDTm1Dfg6mhVhlPVpOH0_zv07zZ4-b_Ag.-tjZCCTiQUShzyHBHA6wvTet_J3xyUL6Pj7HKo0QJbwg.JPEG.lbygns12%2F1634804092959.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMjFfMTI2%2FMDAxNjM0ODA0MTQ3OTkx.SvxfmAW8cQrCifnSamvCc7MzsKUcVeORDvs_HWaxcAUg.DUL0YgDKhmYYmDyXlk29pyw4JaohSJl1hZEo6JsT0Q4g.JPEG.lbygns12%2F1634804093970.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMjFfMTE3%2FMDAxNjM0ODA0MTQ4OTk2.bcAcTVd2T8f5VMin9xkjviLafFl30X0ocekxzMdGElgg.VDbM6tpCp6lH11wCQOfKw4em_Z2Eh8-DY_MAylFOcu0g.JPEG.lbygns12%2F1634804093218.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMjFfMTk4%2FMDAxNjM0ODA0MTQ5NTU2.Hy3EBgdZfaVSxc6mW8NhYaaIpvXx8qPPmGkkLgCTprAg.wnjtQNvX09NGmkxZpH4jitZo2ZrMkwE43CkkeEsp3cYg.JPEG.lbygns12%2F1634804093136.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMjFfOTIg%2FMDAxNjM0ODA0MTUwMTE4.b5EPAgXsvrlr3rYv9a0r8hiFg1cICbAMayhHT2HlD6Ag.zg7abP4LfiyHEM4RgDsnmWoBIKOVgmdV4P3e3gAmw9wg.JPEG.lbygns12%2F1634804093302.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMjFfMjU4%2FMDAxNjM0ODA0MTUwNzYz.QZ-8-5IC-tLZIgTp9fPF-TG0RUkqlC84IMJgTdbzC6kg.JgQ_8ci_6xwXx6CYX_QDoTGXr9_dH2PC7jgvbfeCiqkg.JPEG.lbygns12%2F1634804093532.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMjFfMjky%2FMDAxNjM0ODA0MTUxMzU4.zFe5DLcNGd9xhJj1zr85idK39fGnuCsvdEdm1erHgIgg.lBVeJsoR-a-guwi85lKZYpYzsufxf9G4lVi51c7lGFcg.JPEG.lbygns12%2F1634804093444.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTEwMjFfMjI2%2FMDAxNjM0ODA0MTUyMDcx.BxcynNlDJwwU2ZsSff7w694gSkOwR2twRQdH6sToXS4g.syaki648f6jZzIyEKhfZ-iCbdrboJ-nAmzE5odadydAg.JPEG.lbygns12%2F1634804093633.jpg%3Ftype%3Dw800&type=o372_192",
            ],
            description: {
              title: "묘종 샴고양이 성격 수명 털빠짐 총정리!",
              descriptionText:
                "안녕하세요 독티처 고쌤입니다 오늘은 샴고양이에 대해서 알아볼건데요 기품이 넘치고 가장 고양이 답다고 해서 고양이 왕이라고도 불려지는데요 자연발생한 이 고양이는 페르시안과 쌍벽을 이루는 대표적인인 묘종중...",
              date: "2021.10.21.",
              moreText: "의 참여 콘텐츠 4개 더보기",
              moreUrl:
                "https://in.naver.com/dogteacher/challenge/keyword/143830097674240?query=%EC%83%B4+%EA%B3%A0%EC%96%91%EC%9D%B4",
            },
          },
          {
            title: "고쌤",
            thumbnail: {
              image:
                "https://search.pstatic.net/common/?src=https%3A%2F%2Finfluencer-phinf.pstatic.net%2FMjAyMTAxMDNfMjQ1%2FMDAxNjA5NjQ1ODYyNTU1.FWlldSb-iyOd5oHCA2uWyWDzOf6Tipim-aAxuP8uJCEg.R65RkNwSTOW8hkvBj93S8NI_2wVTSRxNkLnqg_HcTjQg.JPEG%2FIMG_20210103_2.jpg&type=f96_96",
              url: "https://in.naver.com/gosam?query=%EC%83%B4+%EA%B3%A0%EC%96%91%EC%9D%B4",
              highlighted: "Bronze",
            },
            subtitles: {
              title: "동물행동 전문가",
              fans: "팬 1만+",
              expertise: "강아지 전문",
            },
            keywords: [
              {
                title: "독티 대표",
                type: "Company",
              },
              {
                key: "관련 사업 운영/소속",
                value: "관련 사업 운영/소속 1개",
              },
              {
                key: "방송 출연",
                value: "방송 출연 5회",
              },
              {
                key: "반려 스타일",
                value: "여러 마리 반려 중",
              },
            ],
            link: "https://in.naver.com/gosam/contents/355208830599680?query=%EC%83%B4+%EA%B3%A0%EC%96%91%EC%9D%B4",
            images: [
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTA5MjlfMjU3%2FMDAxNjMyOTIyMDIwNTQx.ZleX-SPCRCn4uRmtFW13Vd_BC8-Mqv_oq-VhjpEF1Mog.doDZ7L0pjsR_hOx53aLQGRvkFHxqW32jNfZ6KADAx2Eg.JPEG.lbygns123%2F1632922005982.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTA5MjlfMjIy%2FMDAxNjMyOTIyNjY1MDc4.O7NAYSlf2Qv9Tf4tmYDqC2poqe69DQIWWtanADWHOysg.xTLMNgB5yIwdqlqdOw7TeikEvq577WInNiZgoxPpeUwg.GIF.lbygns123%2Fse3%25A3%25DFani%25A3%25DF1632922660989%25A3%25DFa.gif%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTA5MjlfMTIw%2FMDAxNjMyOTIyMDA4OTkz.UaYNUH0gFXgVrjq5r6HdaKdup8FG_LNl9H1Yn5T1lPMg.SpqVfvBbFq69fmydlGLZ8i6YbCjEiI_SRTWeG3Kx1Vcg.JPEG.lbygns123%2F1632922005184.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTA5MjlfMjI5%2FMDAxNjMyOTIyMDA5ODgw.RgSl38NMIsGR7nIOwRz1a9FdiV2HuKo6QVDYkIWTtWQg.sgDHJj_nidAyqTjqjOrY4exovMg4GIlR_vmDuMVOHi8g.JPEG.lbygns123%2F1632922005255.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTA5MjlfMjgz%2FMDAxNjMyOTIyMDEwNTgx.oPh0A_yZC7cVCd_HVGuJGJmDQqqWk_aBDb_T7Sorzp0g.u6aKJA2AkSIfNX-LonDu7yTNUL7owmnRq0Mm2ZVnijUg.JPEG.lbygns123%2F1632922005312.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTA5MjlfMjQ0%2FMDAxNjMyOTIyMDEyMDIx.0GwrMx_YqtYFt-6n4lNzZseffNYB9-X8ll_nev_mSD4g.8zhJE63xrfFdjcCYxdL6vAC2p6T5SQigT4UHU1TV6Bcg.JPEG.lbygns123%2F1632922005442.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTA5MjlfMTA2%2FMDAxNjMyOTIyMDExMjcx.gZOioaRtADxt55Wusig1LYzRx4v7yJga4NmgcMYb2sEg.rSt5Rifq24iIVTOG462Q3ucPFrS-xAaWaXCSXIcEE6Ag.JPEG.lbygns123%2F1632922005376.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTA5MjlfMjYw%2FMDAxNjMyOTIyMDEyOTYz.x-YKZKzpLorIR96hYXL58bt8Z9-5BFfOe1YGS8S0NIEg.SQB_7c1obQ69YeC0uB6FO5HFoaXQMju8LXrn7kBfTfwg.JPEG.lbygns123%2F1632922005512.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTA5MjlfMjg0%2FMDAxNjMyOTIyMDE0OTYz.0m8mOhdxV1rEOJIPnDa86WjIfHmjVbHMM3TRmGLT1ZMg.YHv3KIj8HcBj2clOWSmbPxfnXiQ8eSpavy-BIJ5Jiswg.JPEG.lbygns123%2F1632922005645.jpg%3Ftype%3Dw800&type=o372_192",
              "https://search.pstatic.net/common/?src=https%3A%2F%2Fmblogthumb-phinf.pstatic.net%2FMjAyMTA5MjlfNDcg%2FMDAxNjMyOTIyMDEzNzgx.wFKrtVqdgvAQ-OhNqm0vcPBdgO0AALpdzQxufEQbAEsg._YVN4pTRbxRQSE72RkmFFhsPdrMviogZsb1aGwqIBa0g.JPEG.lbygns123%2F1632922005564.jpg%3Ftype%3Dw800&type=o372_192",
            ],
            description: {
              title: "샴 고양이 반려묘 종류 성격 수명 털빠짐은?",
              descriptionText:
                "안녕하세요 독티처 고쌤입니다 오늘은 샴고양이에 대해서 설명드릴게요 이 종은 태국이 원산이며 오리엔탈 바디타입으로 사진에 나와 있는 것처럼 다리와 목이 길며 마른 몸매를 가지고 있으면서 역삼각형 얼굴을 가지고...",
              date: "2021.10.01.",
              moreText: "의 참여 콘텐츠 1개 더보기",
              moreUrl:
                "https://in.naver.com/gosam/challenge/keyword/143830097674240?query=%EC%83%B4+%EA%B3%A0%EC%96%91%EC%9D%B4",
            },
          },
        ],
        influencerLink: {
          text: "인플루언서 더보기 ",
          href: "https://m.search.naver.com/search.naver?query=%EC%83%B4+%EA%B3%A0%EC%96%91%EC%9D%B4&sm=mtb_nmr&where=m_influencer",
        },
      },
      news: {
        colorScheme: {
          main: "#3d92ff",
          border: "rgba(61,146,255,.2)",
          circleColor: "rgba(135,142,154,0.3)",
          circleHover: "#9fa4aa",
        },
        header: {
          title: "뉴스",
          condition: "관련도순",
          subcondition: {
            href: "https://m.search.naver.com/search.naver?where=m_news&sm=mtb_amr&query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4&sort=1&nso=so:dd,p:all",
            text: "최신순",
          },
        },
        list: [
          {
            blog: {
              src: "https://ssl.pstatic.net/sstatic/search/mobile/img/bg_news_press_default.png",
              title: "노트펫",
              influencer: "false",
              time: "5일 전",
              href: "http://www.notepet.co.kr/0",
            },
            body: {
              title: "한효주, 점심 식당에서 만난 고양이..'나 가야되는데...'",
              detail:
                '한효주 인스타그램 배우 한효주가 점심 차 간 식당에서 고양이에게 찜(?)을 당했다. 한효주는 24일 인스타그램 스토리에 "점심으로 쌀국수를 먹으러 갔는데 고양이가 있어...."라며 식당에서 만난 고양이를 소개했다. 한효주 옆을 비추는 렌즈에는 샴으로 보이는 고양이가 핑크빛 방울을 달고 자리를...',
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F5511%2F2021%2F11%2F24%2F70683.jpg&amp;type=ofullfill174_174&amp;expire=2&amp;refresh=true",
              href: "http://www.notepet.co.kr/news/article/article_view/?idx=24080&groupCode=AB800AD810",
            },
          },
          {
            blog: {
              src: "https://ssl.pstatic.net/sstatic/search/mobile/img/bg_news_press_default.png",
              title: "노트펫",
              influencer: "false",
              time: "2021.11.13.",
              href: "http://www.notepet.co.kr/0",
            },
            body: {
              title: "경남 거창 한국승강기대학 정문에서 샴 고양이 발견 보호",
              detail:
                "경남 거창 거창읍 송정리 700 한국승강기대학교에서 발견 구조한 암컷 샴 고양이가 12일 동물보호소에 들어왔다. 진갈색, 연갈색 샴은 몸무게 4Kg에 2019년생으로 추정된다. 온순함, 한국승강기대학 정문부근에서 발견됨, 2세 추정. 공고기한은 11월22일까지이고...",
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F5511%2F2021%2F11%2F13%2F70010.jpg&amp;type=ofullfill174_174&amp;expire=2&amp;refresh=true",
              href: "https://www.notepet.co.kr/news/abandon/abandon_view/?idx=152764",
            },
          },
          {
            blog: {
              src: "https://ssl.pstatic.net/sstatic/search/mobile/img/bg_news_press_default.png",
              title: "헬스경향",
              influencer: "false",
              time: "2021.10.21.",
              href: "http://www.k-health.com/",
            },
            body: {
              title:
                "[반려동물 건강이야기] 고양이 각막이 갈색으로 변했다? 각막괴사증 신호!",
              detail:
                "지금까지 추정되는 원인으로는 만성각막궤양, 안검내번 및 첩모로 인한 오랜 각막염, 안구건조증, 고양이 허피스바이러스(FHV-1)에 의한 각막염 등이다. 모든 품종에서 발생할 수 있는데 특히 페르시안, 버미즈, 히말라얀 및 샴(샤미즈)이 더욱 취약한 것으로 보인다. 진단은 각막염색법...",
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F5534%2F2021%2F12%2F01%2F16076.jpg&amp;type=ofullfill174_174&amp;expire=2&amp;refresh=true",
              href: "http://www.k-health.com/news/articleView.html?idxno=56795",
            },
          },
          {
            blog: {
              src: "https://ssl.pstatic.net/sstatic/search/mobile/img/bg_news_press_default.png",
              title: "노트펫",
              influencer: "false",
              time: "2021.10.19.",
              href: "http://www.notepet.co.kr/0",
            },
            body: {
              title: "세종 조치원읍 조형아파트 인근에서 샴 고양이 발견 보호",
              detail:
                "세종 조치원읍 신안리 244-1 조형아파트 인근에서 발견 구조한 암컷 샴 고양이가 18일 동물보호소에 들어왔다. 갈색 혼합 샴은 몸무게 3.12Kg에 2017년생으로 추정된다. . 공고기한은 10월25일까지이고, 세종유기동물보호센터(010-4435-3720)에서 보호하고 있다. 공고...",
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F5511%2F2021%2F10%2F19%2F68007.jpg&amp;type=ofullfill174_174&amp;expire=2&amp;refresh=true",
              href: "https://www.notepet.co.kr/news/abandon/abandon_view/?idx=147168",
            },
          },
        ],
        newsLink: {
          text: "뉴스 더보기 ",
          href: "https://m.search.naver.com/search.naver?where=m_news&sm=mtb_nmr&query=%EC%83%B4%EA%B3%A0%EC%96%91%EC%9D%B4&sort=0&nso=so:r,p:all",
        },
      },
    },
    diary: {
      keyword: "독립일기 함께 많이보는 웹툰",
      order: ["mainCard", "view", "news"],
      mainCard: {
        colorScheme: {
          background: "rgb(236, 239, 243)",
          topBorder: "#c2c9cd",
          subTitle: "rgba(107,112,122,0.8)",
          subTapColor: "#6b707a",
          subTapBar: "rgba(135,142,154,0.3)",
          circleColor: "rgba(135,142,154,0.3)",
          circleHover: "#9fa4aa",
        },
        title: {
          name: "독립일기",
          type: "웹툰",
          "title-url":
            "https://m.comic.naver.com/webtoon/list.nhn?titleId=748105",
          subName: "연재중",
        },

        subTap: {
          mainTap: {
            title: "함께 많이보는 웹툰",
            order: "last",
          },
          list: [
            {
              title: "전체",
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&pkid=47&os=14300223&qvt=0&query=%EB%8F%85%EB%A6%BD%EC%9D%BC%EA%B8%B0",
            },
            {
              title: "회차보기",
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&pkid=47&os=14300223&qvt=0&query=%EB%8F%85%EB%A6%BD%EC%9D%BC%EA%B8%B0%20%ED%9A%8C%EC%B0%A8%EB%B3%B4%EA%B8%B0",
            },
            {
              title: "작가의 다른작품",
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&pkid=47&os=14300223&qvt=0&query=%EB%8F%85%EB%A6%BD%EC%9D%BC%EA%B8%B0%20%EC%9E%91%EA%B0%80%EC%9D%98%20%EB%8B%A4%EB%A5%B8%EC%9E%91%ED%92%88",
            },
          ],
        },

        common: {
          together: {
            header: {
              button: "",
              title: "함께 많이 보는 웹툰",
            },
            list: [
              {
                href: "https://m.search.naver.com/p/crd/rd?m=1&px=451&py=379&sx=451&sy=279&p=hjzG0sp0JxlssKhcf%2FossssssO4-361090&q=%EB%8F%85%EB%A6%BD%EC%9D%BC%EA%B8%B0+%ED%95%A8%EA%BB%98+%EB%A7%8E%EC%9D%B4%EB%B3%B4%EB%8A%94+%EC%9B%B9%ED%88%B0&ie=utf8&rev=1&ssc=tab.m.all&f=m&w=m&s=8xQjg2hbcG4P54LNL6r56Q%3D%3D&time=1638725889341&a=nco_x34*1.rrv&r=1&i=1810BA5C_000000DA343F&u=https%3A%2F%2Fm.search.naver.com%2Fsearch.naver%3Fwhere%3Dm%26sm%3Dmtb_etc%26mra%3DbjQz%26x_csa%3D%257B%2522pkid%2522%253A%2520%252247%2522%257D%26pkid%3D47%26qvt%3D0%26query%3D%25EB%25A8%25B9%25EB%258A%2594%2520%25EC%259D%25B8%25EC%2583%259D&cr=1",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg",
                same: "",
                title: "먹는 인생",
                sub_text: "홍끼",
                preference: "선호도 99%",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=2021%20%EC%B5%9C%EC%95%A0%EC%BA%90%20%EC%95%88%EB%85%95%2C%20%EC%9E%98%20%EC%A7%80%EB%82%B4%EB%8B%88%3F",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F780506%2Fthumbnail%2Fthumbnail_IMAG19_e295146b-8729-4ea0-a332-1c6463d81bd6.jpg",
                same: "",
                title: "2021 최애캐 안녕, 잘 지내니?",
                sub_text: "네이버웹툰",
                preference: "선호도 99%",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EC%A1%B0%EC%A1%B0%EC%BD%94%EB%AF%B9%EC%8A%A4",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F774862%2Fthumbnail%2Fthumbnail_IMAG19_25be10b5-729b-474d-ac9c-bae0a879e8cd.jpg",
                same: "",
                title: "조조코믹스",
                sub_text: "이동건",
                preference: "선호도 89%",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%85%B8%EA%B3%A4%ED%95%98%EA%B0%9C",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F702672%2Fthumbnail%2Fthumbnail_IMAG19_c20e1412-a2fb-493d-8e1e-57234c0ab7e4.jpg",
                same: "",
                title: "노곤하개",
                sub_text: "홍끼",
                preference: "선호도 86%",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EA%B0%9C%EB%A5%BC%20%EB%82%B3%EC%95%98%EB%8B%A4",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F712362%2Fthumbnail%2Fthumbnail_IMAG19_d44348af-7f3b-44a4-88e3-6ff1430256c1.jpg",
                same: "",
                title: "개를 낳았다",
                sub_text: "이선",
                preference: "선호도 84%",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EA%B7%B8%20%ED%95%B4%20%EC%9A%B0%EB%A6%AC%EB%8A%94%20-%20%EC%B4%88%EC%97%AC%EB%A6%84%EC%9D%B4%20%EC%A2%8B%EC%95%84!",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784129%2Fthumbnail%2Fthumbnail_IMAG19_7a5497b2-98a2-4966-9940-6f501af33f9f.jpg",
                same: "",
                title: "그 해 우리는 - 초여름이 좋아!",
                sub_text: "한경찰",
                preference: "선호도 82%",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EC%9C%8C%EC%9C%A0%EB%A9%94%EB%A6%AC%EB%AF%B8",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F616239%2Fthumbnail%2Ftitle_thumbnail_20161031214436_t220x202.jpg",
                same: "",
                title: "윌유메리미",
                sub_text: "마인드C",
                preference: "선호도 81%",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EA%B2%B0%ED%98%BC%EC%83%9D%ED%99%9C%20%EA%B7%B8%EB%A6%BC%EC%9D%BC%EA%B8%B0",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F741891%2Fthumbnail%2Fthumbnail_IMAG19_b822d5ad-0cd6-4313-976a-aa60238375ed.jpg",
                same: "",
                title: "결혼생활 그림일기",
                sub_text: "은꼼지",
                preference: "선호도 98%",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%8C%80%ED%95%99%EC%9D%BC%EA%B8%B0",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F679519%2Fthumbnail%2Ftitle_thumbnail_20160601180804_t220x202.jpg",
                same: "같은작가 작품",
                title: "대학일기",
                sub_text: "자까",
                preference: "선호도 81%",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%8B%A5%ED%84%B0%EC%95%A4%EB%8B%A5%ED%84%B0%20%EC%9C%A1%EC%95%84%EC%9D%BC%EA%B8%B0",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F732955%2Fthumbnail%2Fthumbnail_IMAG19_9a66efb3-2d4f-4013-b43f-03ebe0d8d373.jpg",
                same: "",
                title: "닥터앤닥터 육아일기",
                sub_txt: "닥터베르",
                preference: "선호도 80%",
              },
            ],
            more: {
              href: "",
            },
          },
          life: {
            header: {
              button: "일상",
              title: " 웹툰 랭킹",
            },
            list: [
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%82%98%EC%81%9C%EC%82%AC%EB%9E%8C",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F750184%2Fthumbnail%2Fthumbnail_IMAG19_73f1aaef-824f-4790-a70b-f3b1e3aa22b4.jpg",
                same: "none",
                title: "나쁜사람",
                sub_text: "둠스",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%8F%85%EB%A6%BD%EC%9D%BC%EA%B8%B0",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F748105%2Fthumbnail%2Fthumbnail_IMAG19_d8bd40f2-76f6-448b-8650-126c0d5137b6.jpg",
                same: "none",
                title: "독립일기",
                sub_text: "자까",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%A8%B9%EB%8A%94%20%EC%9D%B8%EC%83%9D",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg",
                same: "none",
                title: "먹는 인생",
                sub_text: "홍끼",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EC%98%A4%EB%B9%A0%EC%84%B8%EB%81%BC",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F758659%2Fthumbnail%2Fthumbnail_IMAG19_c614978a-da9b-462e-9e8c-f5ba49400109.jpg",
                same: "none",
                title: "오빠세끼",
                sub_text: "올리브유",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EC%B5%9C%EB%A9%B4%ED%95%99%EA%B5%90",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F776656%2Fthumbnail%2Fthumbnail_IMAG19_af8ac713-8563-48f9-9028-325668ed4d2c.jpg",
                same: "none",
                title: "최면학교",
                sub_text: "박은혁",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%82%B4%EA%B3%BC%20%EB%B0%95%EC%9B%90%EC%9E%A5",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F781354%2Fthumbnail%2Fthumbnail_IMAG19_54e93171-9019-484d-9696-0f492d9a9772.jpg",
                same: "none",
                title: "내과 박원장",
                sub_text: "장봉수",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%8B%A5%ED%84%B0%EC%95%A4%EB%8B%A5%ED%84%B0%20%EC%9C%A1%EC%95%84%EC%9D%BC%EA%B8%B0",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F732955%2Fthumbnail%2Fthumbnail_IMAG19_9a66efb3-2d4f-4013-b43f-03ebe0d8d373.jpg",
                same: "none",
                title: "닥터앤닥터 육아일기",
                sub_text: "닥터베르",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%ED%98%81%EC%8B%A0%EC%A0%81%20%EC%96%BC%EA%B0%84%EC%9D%B4%EB%93%A4",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F783466%2Fthumbnail%2Fthumbnail_IMAG19_85ae070d-7677-45e6-a034-e25116c900c1.jpg",
                same: "none",
                title: "혁신적 얼간이들",
                sub_text: "가스파드",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EC%9C%8C%EC%9C%A0%EB%A9%94%EB%A6%AC%EB%AF%B8",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F616239%2Fthumbnail%2Ftitle_thumbnail_20161031214436_t220x202.jpg",
                same: "none",
                title: "윌유메리미",
                sub_text: "마인드C",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%A7%8C%EB%AC%BC%EC%9D%98%20%EC%98%81%EC%9E%A5",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F729964%2Fthumbnail%2Fthumbnail_IMAG19_a13551ff-0c82-422e-beff-454e91915ddb.jpg",
                same: "none",
                title: "만물의 영장",
                sub_text: "보민",
                preference: "",
              },
            ],
            more: {
              href: "",
            },
          },
          new: {
            header: {
              button: "",
              title: "주간 신작 랭킹",
            },
            list: [
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%ED%95%98%EB%B6%81%ED%8C%BD%EA%B0%80%20%EB%A7%89%EB%82%B4%EC%95%84%EB%93%A4",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F783877%2Fthumbnail%2Fthumbnail_IMAG19_9ded158e-252d-41fa-9dad-ae8b00eb97d8.jpg",
                same: "none",
                title: "하북팽가 막내아들",
                sub_text: "스튜디오M",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EA%B9%80%EB%B6%80%EC%9E%A5",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F783053%2Fthumbnail%2Fthumbnail_IMAG19_c24f84ca-4d6a-4651-9a14-0f1fd2ad4fe2.jpg",
                same: "none",
                title: "김부장",
                sub_text: "박태준 만화회사",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EC%A1%B4%EB%A7%9D%EC%BD%94%EC%9D%B8",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F783051%2Fthumbnail%2Fthumbnail_IMAG19_1f6cc767-2c3e-4a7e-9fb4-e6a8628f98bd.jpg",
                same: "none",
                title: "존망코인",
                sub_text: "박태준 만화회사",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=2021%20%EC%B5%9C%EC%95%A0%EC%BA%90%20%EC%95%88%EB%85%95%2C%20%EC%9E%98%20%EC%A7%80%EB%82%B4%EB%8B%88%3F",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F780506%2Fthumbnail%2Fthumbnail_IMAG19_e295146b-8729-4ea0-a332-1c6463d81bd6.jpg",
                same: "none",
                title: "2021 최애캐 안녕, 잘 지내니?",
                sub_text: "웹툰작가",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EC%87%BC%EB%AF%B8%EB%8D%94%EB%9F%AD%ED%82%A4%EC%A7%B1!",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F783054%2Fthumbnail%2Fthumbnail_IMAG19_68008638-4a6e-4dbc-a64c-19a4f852e303.jpg",
                same: "none",
                title: "쇼미더럭키짱!",
                sub_text: "박태준",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%ED%98%84%EC%8B%A4%ED%80%98%EC%8A%A4%ED%8A%B8",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F783888%2Fthumbnail%2Fthumbnail_IMAG19_b1ed2d69-abc6-43a3-8a17-41af6f972168.jpg",
                same: "none",
                title: "현실퀘스트",
                sub_text: "이주운",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%82%B4%EA%B0%80%20%ED%82%A4%EC%9A%B4%20S%EA%B8%89%EB%93%A4",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784248%2Fthumbnail%2Fthumbnail_IMAG19_a5dbcf45-e4a3-443e-aba5-2291839182db.jpg",
                same: "none",
                title: "내가 키운 S급들",
                sub_text: "근서, seri",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%A8%B9%EB%8A%94%20%EC%9D%B8%EC%83%9D",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg",
                same: "none",
                title: "먹는 인생",
                sub_text: "홍끼",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EA%B7%B8%20%ED%95%B4%20%EC%9A%B0%EB%A6%AC%EB%8A%94%20-%20%EC%B4%88%EC%97%AC%EB%A6%84%EC%9D%B4%20%EC%A2%8B%EC%95%84!",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784129%2Fthumbnail%2Fthumbnail_IMAG19_7a5497b2-98a2-4966-9940-6f501af33f9f.jpg",
                same: "none",
                title: "그 해 우리는 - 초여름이 좋아!",
                sub_text: "한경찰",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%82%B4%20%EB%82%A8%ED%8E%B8%EA%B3%BC%20%EA%B2%B0%ED%98%BC%ED%95%B4%EC%A4%98",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F783769%2Fthumbnail%2Fthumbnail_IMAG19_551ce039-3244-4bc9-819d-06dbc5a9a945.jpg",
                same: "none",
                title: "내 남편과 결혼해줘",
                sub_text: "성소작",
                preference: "",
              },
            ],
            more: {
              href: "",
            },
          },
          weekly: {
            header: {
              button: "",
              title: "주간 랭킹",
            },
            list: [
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EC%97%B0%EC%95%A0%ED%98%81%EB%AA%85",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F570503%2Fthumbnail%2Fthumbnail_IMAG19_c04fd4ec-8bbf-4765-ab13-2281b1eb254e.jpg",
                same: "none",
                title: "연애혁명",
                sub_text: "232",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EC%8B%B8%EC%9B%80%EB%8F%85%ED%95%99",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F736277%2Fthumbnail%2Fthumbnail_IMAG19_256e08d0-dfd0-454a-9a74-1743bad87e81.jpg",
                same: "none",
                title: "싸움독학",
                sub_text: "박태준",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EC%99%B8%EB%AA%A8%EC%A7%80%EC%83%81%EC%A3%BC%EC%9D%98",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F641253%2Fthumbnail%2Fthumbnail_IMAG19_fe828dc9-84a2-4329-9d83-2f4afc981031.jpg",
                same: "none",
                title: "외모지상주의",
                sub_text: "박태준",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EC%B0%B8%EA%B5%90%EC%9C%A1",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F758037%2Fthumbnail%2Fthumbnail_IMAG19_67290a02-fe7f-448d-aed9-6ec88e558088.jpg",
                same: "none",
                title: "참교육",
                sub_text: "채용택",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%8D%94%20%EB%B3%B5%EC%84%9C",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F736989%2Fthumbnail%2Fthumbnail_IMAG19_d672bf96-2b0f-4e46-9786-5fb296e228fe.jpg",
                same: "none",
                title: "더 복서",
                sub_text: "정지훈",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EC%A0%84%EC%A7%80%EC%A0%81%20%EB%8F%85%EC%9E%90%20%EC%8B%9C%EC%A0%90",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F747269%2Fthumbnail%2Fthumbnail_IMAG19_e50a911a-aeed-4cd1-abb9-1efba754f68b.jpg",
                same: "none",
                title: "전지적 독자 시점",
                sub_text: "싱숑, UMI",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EC%82%AC%EC%8B%A0%EC%86%8C%EB%85%84",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F730656%2Fthumbnail%2Fthumbnail_IMAG19_d4ec5bbe-da24-4a6c-aa1d-4aeb36005a72.jpg",
                same: "none",
                title: "사신소년",
                sub_text: "류",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EC%97%AC%EC%8B%A0%EA%B0%95%EB%A6%BC",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F703846%2Fthumbnail%2Fthumbnail_IMAG19_225f310e-c16c-4ac3-b164-987d0cec46a7.jpg",
                same: "none",
                title: "여신강림",
                sub_text: "야옹이",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EA%B9%80%EB%B6%80%EC%9E%A5",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F783053%2Fthumbnail%2Fthumbnail_IMAG19_c24f84ca-4d6a-4651-9a14-0f1fd2ad4fe2.jpg",
                same: "none",
                title: "김부장",
                sub_text: "박태준 만화회사",
                preference: "",
              },
              {
                href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%ED%95%9C%EB%A6%BC%EC%B2%B4%EC%9C%A1%EA%B4%80",
                src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F743139%2Fthumbnail%2Fthumbnail_IMAG19_510971eb-e1d0-45ce-ac81-51df7edfd9d6.jpg",
                same: "none",
                title: "한림체육관",
                sub_text: "혜성",
                preference: "",
              },
            ],
            more: {
              href: "",
            },
          },
        },
        similar: {
          header: {
            button: "",
            title: "여성들이 많이 찾는 월요웹툰",
          },
          list: [
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%82%98%EC%81%9C%EC%82%AC%EB%9E%8C",
              src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F750184%2Fthumbnail%2Fthumbnail_IMAG19_73f1aaef-824f-4790-a70b-f3b1e3aa22b4.jpg",
              same: "none",
              title: "나쁜사람",
              sub_text: "둠스",
              preference: "",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%8F%85%EB%A6%BD%EC%9D%BC%EA%B8%B0",
              src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F748105%2Fthumbnail%2Fthumbnail_IMAG19_d8bd40f2-76f6-448b-8650-126c0d5137b6.jpg",
              same: "none",
              title: "독립일기",
              sub_text: "자까",
              preference: "",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%A8%B9%EB%8A%94%20%EC%9D%B8%EC%83%9D",
              src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F784255%2Fthumbnail%2Fthumbnail_IMAG19_a7a092fd-4f82-4ec9-afad-0ea1268d9a53.jpg",
              same: "none",
              title: "먹는 인생",
              sub_text: "홍끼",
              preference: "",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EC%98%A4%EB%B9%A0%EC%84%B8%EB%81%BC",
              src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F758659%2Fthumbnail%2Fthumbnail_IMAG19_c614978a-da9b-462e-9e8c-f5ba49400109.jpg",
              same: "none",
              title: "오빠세끼",
              sub_text: "올리브유",
              preference: "",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EC%B5%9C%EB%A9%B4%ED%95%99%EA%B5%90",
              src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F776656%2Fthumbnail%2Fthumbnail_IMAG19_af8ac713-8563-48f9-9028-325668ed4d2c.jpg",
              same: "none",
              title: "최면학교",
              sub_text: "박은혁",
              preference: "",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%82%B4%EA%B3%BC%20%EB%B0%95%EC%9B%90%EC%9E%A5",
              src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F781354%2Fthumbnail%2Fthumbnail_IMAG19_54e93171-9019-484d-9696-0f492d9a9772.jpg",
              same: "none",
              title: "내과 박원장",
              sub_text: "장봉수",
              preference: "",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%8B%A5%ED%84%B0%EC%95%A4%EB%8B%A5%ED%84%B0%20%EC%9C%A1%EC%95%84%EC%9D%BC%EA%B8%B0",
              src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F732955%2Fthumbnail%2Fthumbnail_IMAG19_9a66efb3-2d4f-4013-b43f-03ebe0d8d373.jpg",
              same: "none",
              title: "닥터앤닥터 육아일기",
              sub_text: "닥터베르",
              preference: "",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%ED%98%81%EC%8B%A0%EC%A0%81%20%EC%96%BC%EA%B0%84%EC%9D%B4%EB%93%A4",
              src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F783466%2Fthumbnail%2Fthumbnail_IMAG19_85ae070d-7677-45e6-a034-e25116c900c1.jpg",
              same: "none",
              title: "혁신적 얼간이들",
              sub_text: "가스파드",
              preference: "",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EC%9C%8C%EC%9C%A0%EB%A9%94%EB%A6%AC%EB%AF%B8",
              src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F616239%2Fthumbnail%2Ftitle_thumbnail_20161031214436_t220x202.jpg",
              same: "none",
              title: "윌유메리미",
              sub_text: "마인드C",
              preference: "",
            },
            {
              href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EB%A7%8C%EB%AC%BC%EC%9D%98%20%EC%98%81%EC%9E%A5",
              src: "https://search.pstatic.net/common?type=f&amp;size=210x210&amp;quality=75&amp;direct=true&amp;src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F729964%2Fthumbnail%2Fthumbnail_IMAG19_a13551ff-0c82-422e-beff-454e91915ddb.jpg",
              same: "none",
              title: "만물의 영장",
              sub_text: "보민",
              preference: "",
            },
          ],
          more: {
            href: "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjQz&x_csa=%7B%22pkid%22%3A%20%2247%22%7D&pkid=47&qvt=0&query=%EC%9B%B9%ED%88%B0",
            text1: "이어서",
            text2: "더보기",
          },
          text: "네이버 웹툰 2021-11-29",
        },
      },
      view: {
        header: {
          title: "VIEW",
        },
        colorScheme: {
          circleColor: "rgba(135,142,154,0.3)",
          circleHover: "#9fa4aa",
        },
        list: [
          {
            blog: {
              src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMTExMDRfMjM0%2FMDAxNjM1OTkwMjQxMzI3.D6baEUSrUiqOuoBZAczfAgw9trcnoyAsVbaFO_ZKF6Mg.B4U0Aj3OpTQTiQx1kn0zTFq-ZA9XFBhO2rR5xyze4SEg.JPEG%2FexternalFile.jpg&type=f54_54",
              title: "수다떠는 장안맘",
              influencer: "false",
              time: "2020.12.03",
              href: "https://m.cafe.naver.com/ca-fe/web/cafes/jangantalk/articles/220153?useCafeId=false&or=m.search.naver.com&query=%EB%8F%85%EB%A6%BD%EC%9D%BC%EA%B8%B0&buid=d713d18d-4e14-4e9c-893e-5047c13299bf&art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1ldGMtZm9yLWNvbW1lbnQ.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWZlVHlwZSI6IkNBRkVfSUQiLCJhcnRpY2xlSWQiOjIyMDE1MywiaXNzdWVkQXQiOjE2Mzg3MDAyNTYwMjQsImNhZmVJZCI6MjU3Mjg5NTV9.57lPIyd5RG_pLtc-Zq0xj3iDSz6ObEhxDnXGME_MmD8",
            },
            body: {
              title: "웹툰 독립일기 잼있어요 ㅎㅎ",
              detail:
                "네*버 웹툰 중에 독립일기 웹툰 잼있어요 ㅋㅋ 제목은 '독립일기'인데 주부이자 아줌마인 저한테도 뭔가 절묘하게 공감이 ㅋㅋ (그림은 문제시 삭제하겠습니다) '세상은 넓고 세제는...'",
              src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDEyMDNfMTcz%2FMDAxNjA3MDAyNDc1MzA1.e6QAowvS7KOsKEhr8Jyizask1j8VjgYNHb7S8rLw6Cgg.hE_yTwI4p4wDnzUCOqPnH4TbtDEhA_l_6ZZhQzyzAV0g.PNG%2F7CA1D922-DC4D-4B72-8AEC-7EEEEB8E9FBA.png%23800x1732&type=ff192_192",
              href: "https://m.blog.naver.com/tcacyc/222546516689",
            },
            tags: {
              list: [],
            },
            link: {},
          },

          {
            blog: {
              src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogpfthumb.phinf.naver.net%2F20101127_220%2Fluisini_1290852925505_8i6WaA_jpg%2F101119.jpg&type=f54_54",
              title: "호오랭애의 활동일지",
              influencer: "false",
              time: "2021.09.03.",
              href: "https://m.blog.naver.com/luisini",
            },
            body: {
              title: "[독립일기] 셀프이사준비 & 자취꿀템 구매",
              detail:
                "웹툰 독립일기 보고 알았다. 아무튼 나도 삼 근데 이거 아직도 안붙였다 왜냐면... 진짜 독립 아무나하는거 아니다 싶었다. 아 물론 나처럼 대충 가구없이 살고 그럴거면뭐.....",
              src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MDNfMjg0%2FMDAxNjMwNjc0NzY5MjE1.m8ONDnxL-3c_5JMqCbqWIToiQstQpTUj7sX3wprpes8g.DK4f00caM8Q4Aak6MGrHprSzEFfU6Dfw26OMFIC3ohcg.JPEG.luisini%2F%25C1%25A6%25B8%25F1%25C0%25BB%25A3%25AD%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4%25A3%25DF%25A3%25AD001.jpg%23900x900&type=ff192_192",
              href: "https://m.blog.naver.com/kyena200/222556888699",
            },
            tags: {
              list: [
                {
                  title: "셀프이사",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%85%80%ED%94%84%EC%9D%B4%EC%82%AC",
                },
                {
                  title: "행복주택",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%96%89%EB%B3%B5%EC%A3%BC%ED%83%9D",
                },
                {
                  title: "자취꿀템",
                  href: "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%9E%90%EC%B7%A8%EA%BF%80%ED%85%9C",
                },
              ],
            },
            link: {
              text: "[독립일기] 행복주택 당첨 후 과정 - 등기수령/사전점검/전자계약(#행복주택 #독립)",
              href: "https://m.blog.naver.com/luisini/222457622189",
            },
          },
        ],
      },
      news: {
        colorScheme: {
          main: "#3d92ff",
          border: "rgba(61,146,255,.2)",
          circleColor: "rgba(135,142,154,0.3)",
          circleHover: "#9fa4aa",
        },
        header: {
          title: "뉴스",
          condition: "관련도순",
          subcondition: {
            href: "https://m.search.naver.com/search.naver?where=m_news&query=%EB%8F%85%EB%A6%BD%EC%9D%BC%EA%B8%B0%20%ED%95%A8%EA%BB%98%20%EB%A7%8E%EC%9D%B4%EB%B3%B4%EB%8A%94%20%EC%9B%B9%ED%88%B0&sm=mtb_opt&sort=1&photo=0&field=0&pd=0&ds=&de=&docid=&related=0&mynews=0&office_type=0&office_section_code=0&news_office_checked=&nso=so%3Add%2Cp%3Aall&is_sug_officeid=0",
            text: "최신순",
          },
        },
        list: [
          {
            blog: {
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fmonthly.chosun.com%2Fimages%2Ffavicon_img.png&type=f54_54&expire=24&refresh=true",
              title: "월간조선",
              influencer: "false",
              time: "2021.11.15.",
              href: "http://monthly.chosun.com/",
            },
            body: {
              title:
                "줄리아 보이드의 《히틀러 시대의 여행자들》 | 全體主義 독일을 찬양한 ‘쓸모 ...",
              detail:
                "운동선수, 웹툰 작가 등이 나와 온갖 잡담을 늘어놓는 TV 프로그램, BTS와 걸그룹에 환호하는 10대 등을 보면 그렇다는 얘기다. 코로나19 때문에 수천... 밤 일기에 이렇게 썼다. “영국 언론들은 최근에 독일에 대한 가짜 뉴스를 너무 많이 전하는 수치스러운 짓을 했다.” 1935년 다하우 강제수용소를...",
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F5481%2F2021%2F11%2F15%2F16289.jpg&amp;type=ofullfill174_174&amp;expire=2&amp;refresh=true",
              href: "http://monthly.chosun.com/client/news/viw.asp?ctcd=I&nNewsNumb=202111100052",
            },
          },
          {
            blog: {
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fbyline.network%2Fwp-content%2Fuploads%2F2018%2F10%2Fcropped-icon-192x192.png&type=f54_54&expire=24&refresh=true",
              title: "바이라인네트워크",
              influencer: "false",
              time: "2019.11.12.",
              href: "https://byline.network/",
            },
            body: {
              title:
                "[웹툰작가를 만나다] '최경아-이빈-단지', 여작가들 수다 인터뷰",
              detail:
                "그리는 입장에서는, 웹툰은 거의 연출 방식 자체가 고정되어 있잖아요, 컷이. 그런데 페이지 만화는 그 안에서 쪼갠단 말이에요. 그리는 사람 입장에서는, 그렇게 쪼개는 게 더 재밌어요. 이빈: 아마존 킨들로 전자책을 많이 보는데, E-book(전자책)은 스크롤 방식이 아니란 말이에요. 아직 넘겨서...",
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F5704%2F2019%2F11%2F12%2F1404.jpg&amp;type=ofullfill174_174&amp;expire=2&amp;refresh=true",
              href: "https://byline.network/?p=41771",
            },
          },
          {
            blog: {
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fcdnweb01.wikitree.co.kr%2Fwebdata%2Feditor%2F_common%2Ffavicon.png&type=f54_54&expire=24&refresh=true",
              title: "위키트리",
              influencer: "false",
              time: "2017.02.02.",
              href: "http://www.wikitree.co.kr/",
            },
            body: {
              title: "고양이 집사 공감 웹툰, '뽀짜툰' 작가 인터뷰",
              detail:
                "작품을 시작한 계기가 있다면 2003년, 처음 뽀또와 짜구를 키우면서 자연스럽게 얻어지는 에피소드들이 재미있어서 그림일기 그리듯 가벼운... 웹툰을 많이 찾아볼 수 있다. 반려동물 웹툰이 많아지는 건 어떤 걸 의미하는 걸까? 아무래도 그만큼 동물과 함께 살아가는 인구가 많아지고 있다는...",
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F5239%2F2017%2F02%2F02%2F94402.jpg&amp;type=ofullfill174_174&amp;expire=2&amp;refresh=true",
              href: "http://www.wikitree.co.kr/main/news_view.php?id=290570",
            },
          },
          {
            blog: {
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fm.asiatime.co.kr%2Fimg%2Ffavicon.png&type=f54_54&expire=24&refresh=true",
              title: "아시아타임즈",
              influencer: "false",
              time: "2021.09.06.",
              href: "http://www.asiatime.co.kr/",
            },
            body: {
              title:
                "[6일 안성시 소식] 코로나 상생 국민지원금 온라인 신청 적극 권장 등",
              detail:
                "그림책방, 독립출판물 전시실 및 제1기 책문화 프로그램을 운영 중이다. 제2기 책문화 프로그램은 이야기 구성부터 삽화 그리기까지 수강생이 직접 창작하는 ‘나만의 그림책 만들기’, 하루의 일과를 그림책으로 엮어보는 ‘그림일기 이야기책 만들기’, 태블릿을 활용한 ‘웹툰 기초반’등 총...",
              src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fimgnews.pstatic.net%2Fimage%2Forigin%2F5492%2F2021%2F09%2F06%2F186740.jpg&amp;type=ofullfill174_174&amp;expire=2&amp;refresh=true",
              href: "https://m.asiatime.co.kr/article/20210906500139",
            },
          },
        ],
        newsLink: {
          text: "뉴스 더보기 ",
          href: "https://m.search.naver.com/search.naver?where=m_news&sm=mtb_jum&query=%EB%8F%85%EB%A6%BD%EC%9D%BC%EA%B8%B0+%ED%95%A8%EA%BB%98+%EB%A7%8E%EC%9D%B4%EB%B3%B4%EB%8A%94+%EC%9B%B9%ED%88%B0",
        },
      },
    },
    error: {
      order: ["error"],
      content: {
        title: "유효하지 않은 검색결과입니다.",
        text1: "단어의 철자가 정확한지 확인해 주세요.",
        text2:
          "'샴고양이', '경주 불국사', '독립일기 함께 많이보는 웹툰', 혹은 빈 검색어로 검색해 보세요.",
      },
    },
  };
  static payloadKeys = Object.keys(this.payloadMap);

  constructor() {}

  randomKey() {
    return PayloadSelector.payloadKeys[
      Math.floor(Math.random() * PayloadSelector.payloadKeys.length)
    ];
  }

  selectByKeys(keys) {
    return keys.map((key) => this.payloadMap.get(key));
  }

  select(keys) {
    if (!keys || (Array.isArray(keys) && !keys.length)) {
      keys = [this.randomKey()];
    }
    return keys
      .map((key) => this.constructor.payloadMap[key])
      .filter((o) => !!o);
  }
}

module.exports = new PayloadSelector();
