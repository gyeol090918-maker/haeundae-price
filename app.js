const nationalAverages = {
  '냉면': 10817, '비빔밥': 10301, '김치찌개백반': 9036, '삼겹살': 17839,
  '자장면': 7211, '삼계탕': 16801, '칼국수': 9053, '김밥': 3465
};
const haeundaeMedians = {
  '냉면': 12000, '비빔밥': 11000, '김치찌개백반': 9500, '삼겹살': 19000,
  '자장면': 7500, '삼계탕': 18000, '칼국수': 9000, '김밥': 4000
};
const menuCatalog = {
  '돼지국밥':9500,'순대국밥':10000,'밀면':10000,'비빔밀면':10500,'냉면':12000,'비빔밥':11000,'김치찌개백반':9500,'된장찌개':9000,'삼겹살':19000,'돼지갈비':18000,'갈비탕':16000,'설렁탕':12000,'대구탕':12000,'복국':15000,'자장면':7500,'짬뽕':9500,'탕수육':23000,'삼계탕':18000,'칼국수':9000,'김밥':4000,'떡볶이':4500,'어묵':2500,'회덮밥':15000,'조개구이 2인':59000,'모둠회 2인':65000,'낙곱새 2인':35000,'치킨':22000,'아메리카노':5000,'카페라떼':6000,'디저트':7000
};
const places = [
  {id:1,name:'해변국밥',menu:'돼지국밥',price:10000,median:9500,rating:4.6,reviews:128,status:'적정',x:'34%',y:'46%',summary:'가격표와 실제 결제 금액이 일치했다는 후기가 많습니다. 혼잡 시간에는 대기가 있다는 의견이 있습니다.'},
  {id:2,name:'달맞이 밀면',menu:'밀면',price:11000,median:10000,rating:4.3,reviews:76,status:'주의',x:'59%',y:'35%',summary:'맛과 양에는 만족한다는 의견이 많지만, 주변 평균보다 가격이 높다는 리뷰가 일부 있습니다.'},
  {id:3,name:'바다 조개구이',menu:'조개구이 2인',price:65000,median:59000,rating:4.5,reviews:54,status:'주의',x:'48%',y:'63%',summary:'추가 메뉴 비용을 주문 전에 안내받았다는 리뷰가 많습니다. 기본 세트의 구성 확인을 권장합니다.'},
  {id:4,name:'해운대 한상',menu:'김치찌개백반',price:9000,median:9500,rating:4.7,reviews:93,status:'적정',x:'23%',y:'32%',summary:'합리적인 가격과 빠른 서비스에 대한 긍정적 의견이 많습니다.'}
];
const won = value => `${Number(value).toLocaleString('ko-KR')}원`;
const translations = {
  ko:{navHome:'홈',navPrice:'가격 비교',navMap:'리뷰',priceTitle:'해운대 메뉴 가격 비교',priceDesc:'현재 가격을 입력하면 해운대 중앙값 및 전국 외식비 평균과 비교합니다.',menuLabel:'메뉴 선택',restaurantLabel:'식당 이름 검색 (선택)',restaurantPlaceholder:'예: 해운대 식당 이름',openOnMap:'지도에서 열기',currentPrice:'현재 메뉴 가격',checkPrice:'적정 가격 확인',emptyTitle:'가격을 입력해 주세요.',emptyDesc:'입력한 가격이 어느 범위에 있는지 알려드립니다.',ok:'적정 가격',warn:'다소 높음',high:'가격 확인 필요',difference:'해운대 중앙값 대비',homeTitle:'해운대에서,<br /><em>가격 걱정 없이</em> 맛있게.',homeDesc:'메뉴가가 실제 결제 정보와 지역 가격 기준을 비교해 합리적인 선택을 돕습니다.',goPrice:'가격 비교하기',goMap:'주변 식당 보기',nearbyTitle:'해운대 식당 리뷰',all:'전체',fair:'적정 가격',check:'가격 확인'},
  en:{navHome:'Home',navPrice:'Price check',navMap:'Reviews',priceTitle:'Haeundae menu price check',priceDesc:'Compare a current price with the Haeundae median and national average.',menuLabel:'Select menu',restaurantLabel:'Search restaurant name (optional)',restaurantPlaceholder:'e.g. Haeundae restaurant',openOnMap:'Open on map',currentPrice:'Current menu price',checkPrice:'Check fair price',emptyTitle:'Enter a price.',emptyDesc:'We will show where the price sits in the range.',ok:'Fair price',warn:'Slightly high',high:'Check the price',difference:'vs. Haeundae median',homeTitle:'Eat well in Haeundae,<br /><em>without price worries.</em>',homeDesc:'Menu-ga compares verified payment information with local price benchmarks.',goPrice:'Compare prices',goMap:'Explore nearby',nearbyTitle:'Haeundae restaurant reviews',all:'All',fair:'Fair price',check:'Check price'},
  ja:{navHome:'ホーム',navPrice:'価格比較',navMap:'地図・レビュー',priceTitle:'海雲台メニュー価格比較',priceDesc:'現在価格を海雲台の中央値と全国平均に比較します。',menuLabel:'メニュー選択',restaurantLabel:'店名を検索（任意）',restaurantPlaceholder:'例：海雲台の飲食店名',openOnMap:'地図で開く',currentPrice:'現在のメニュー価格',checkPrice:'適正価格を確認',emptyTitle:'価格を入力してください。',emptyDesc:'入力した価格がどの範囲にあるか表示します。',ok:'適正価格',warn:'やや高い',high:'価格の確認が必要',difference:'海雲台平均との差',homeTitle:'海雲台で、<br /><em>価格を心配せずに</em>おいしく。',homeDesc:'実際の決済情報と地域の価格基準を比較します。',goPrice:'価格を比較',goMap:'周辺の店を見る',nearbyTitle:'海雲台周辺の飲食店',all:'すべて',fair:'適正価格',check:'価格を確認'},
  zh:{navHome:'首页',navPrice:'价格比较',navMap:'地图 · 评论',priceTitle:'海云台菜单价格比较',priceDesc:'将当前价格与海云台中位数和全国平均价格进行比较。',menuLabel:'选择菜单',restaurantLabel:'搜索餐厅名称（可选）',restaurantPlaceholder:'例如：海云台餐厅',openOnMap:'在地图中打开',currentPrice:'当前菜单价格',checkPrice:'确认合理价格',emptyTitle:'请输入价格。',emptyDesc:'我们会显示输入价格所在的区间。',ok:'价格合理',warn:'略高',high:'请确认价格',difference:'与海云台中位数相比',homeTitle:'在海云台，<br /><em>不用担心价格</em>，安心享用美食。',homeDesc:'比较实际支付信息和当地价格基准，帮助您合理消费。',goPrice:'比较价格',goMap:'查看附近餐厅',nearbyTitle:'海云台附近餐厅',all:'全部',fair:'价格合理',check:'确认价格'}
};
Object.assign(translations.ko,{metricAverage:'전국 외식비 기준 평균',metricMenus:'비교 가능 메뉴',metricReceipt:'영수증 기반',metricReview:'리뷰 검증 원칙',mapTitle:'해운대 주변 식당 지도',allReviews:'리뷰 전체보기 →',howTitle:'결제 전 확인하는 세 가지',feature1Title:'가격 비교',feature1Desc:'메뉴 가격을 해운대 중앙값과 전국 평균 기준으로 비교합니다.',feature2Title:'인근 식당 탐색',feature2Desc:'해운대 해변 주변의 식당을 지도에서 가격 신뢰도와 함께 확인합니다.',feature3Title:'검증된 후기',feature3Desc:'영수증 인증 리뷰로 실제 결제 경험과 추가요금 안내 여부를 봅니다.',ctaTitle:'내가 보려는 메뉴,<br />적정한 가격인지 확인하세요.',ctaButton:'메뉴 가격 확인 →',footerHome:'© 메뉴가 · 해운대 관광객을 위한 가격 투명성 안내 서비스',formNote:'전국 평균은 16개 지역 외식비 평균 자료를 참고했습니다.',referenceTitle:'전국 외식비 평균',regions16:'16개 지역 평균',sourceNote:'※ 전국 기준값은 사용자가 제공한 외식비 CSV의 지역별 평균을 단순 평균한 값입니다. 해운대 중앙값은 현재 시연용 데이터이며, 서비스 운영 시 영수증 인증 결제 데이터로 갱신됩니다.',footerPrice:'© 메뉴가 · 가격은 참고 정보이며 메뉴 구성·양·추가요금에 따라 달라질 수 있습니다.',viewMap:'지도에서 식당 보기 →',ratingLabel:'별점',reviewLabel:'후기',receiptLabel:'영수증 인증',submitReview:'리뷰 등록',footerReview:'© 메뉴가 · 인증 리뷰는 실제 결제 경험을 바탕으로 합니다.'});
Object.assign(translations.en,{metricAverage:'National dining average',metricMenus:'Comparable menu items',metricReceipt:'Receipt-based',metricReview:'Review verification policy',mapTitle:'Restaurant map near Haeundae',allReviews:'See all reviews →',howTitle:'Three checks before you pay',feature1Title:'Compare prices',feature1Desc:'Compare a menu price with the Haeundae median and national average.',feature2Title:'Find nearby restaurants',feature2Desc:'Check restaurants around Haeundae Beach on the map.',feature3Title:'Verified reviews',feature3Desc:'See verified payment experiences and extra-charge notices.',ctaTitle:'Check whether the menu<br />price is fair.',ctaButton:'Check menu price →',footerHome:'© Menu-ga · Price transparency for Haeundae visitors',formNote:'The national average uses dining-price data from 16 regions.',referenceTitle:'National dining averages',regions16:'Average of 16 regions',sourceNote:'※ National benchmarks are simple averages of regional data in the supplied dining-price CSV. Haeundae medians are demonstration data and will be updated with verified receipt payments.',footerPrice:'© Menu-ga · Prices are reference information and may vary by portion, menu composition, and extra charges.',viewMap:'View restaurants on map →',ratingLabel:'Rating',reviewLabel:'Review',receiptLabel:'Receipt verification',submitReview:'Submit review',footerReview:'© Menu-ga · Verified reviews are based on actual payments.'});
Object.assign(translations.ja,{metricAverage:'全国外食費の基準平均',metricMenus:'比較可能なメニュー',metricReceipt:'レシート基準',metricReview:'レビュー検証方針',mapTitle:'海雲台周辺の飲食店地図',allReviews:'レビューをすべて見る →',howTitle:'支払い前に確認する3つのこと',feature1Title:'価格を比較',feature1Desc:'メニュー価格を海雲台の中央値と全国平均で比較します。',feature2Title:'周辺の店を探す',feature2Desc:'海雲台ビーチ周辺の店を地図で確認します。',feature3Title:'検証済みレビュー',feature3Desc:'実際の決済経験と追加料金の案内を確認できます。',ctaTitle:'見たいメニューが<br />適正価格か確認しましょう。',ctaButton:'メニュー価格を確認 →',footerHome:'© メニューガ · 海雲台観光客のための価格案内サービス',formNote:'全国平均は16地域の外食費データを参考にしています。',referenceTitle:'全国外食費の平均',regions16:'16地域の平均',sourceNote:'※ 全国基準値は提供されたCSVの地域別平均を単純平均したものです。海雲台の中央値はデモデータで、レシート認証データで更新されます。',footerPrice:'© メニューガ · 価格は参考情報で、量・構成・追加料金により異なる場合があります。',viewMap:'地図で飲食店を見る →',ratingLabel:'評価',reviewLabel:'レビュー',receiptLabel:'レシート認証',submitReview:'レビューを登録',footerReview:'© メニューガ · 認証レビューは実際の決済経験に基づいています。'});
Object.assign(translations.zh,{metricAverage:'全国餐饮平均价格',metricMenus:'可比较菜单',metricReceipt:'基于收据',metricReview:'评论验证原则',mapTitle:'海云台附近餐厅地图',allReviews:'查看全部评论 →',howTitle:'付款前确认三件事',feature1Title:'比较价格',feature1Desc:'将菜单价格与海云台中位数和全国平均价格比较。',feature2Title:'查找附近餐厅',feature2Desc:'在地图上查看海云台海滩附近的餐厅。',feature3Title:'已验证评论',feature3Desc:'查看实际支付体验和附加费用说明。',ctaTitle:'确认您想看的菜单<br />是否价格合理。',ctaButton:'确认菜单价格 →',footerHome:'© 菜单价 · 为海云台游客提供价格透明服务',formNote:'全国平均价格参考16个地区的餐饮价格数据。',referenceTitle:'全国餐饮平均价格',regions16:'16个地区平均',sourceNote:'※ 全国基准值是用户提供的餐饮价格CSV中地区平均值的简单平均。海云台中位数为演示数据，将用经验证的收据支付数据更新。',footerPrice:'© 菜单价 · 价格仅供参考，可能因分量、菜单构成和附加费用而变化。',viewMap:'在地图中查看餐厅 →',ratingLabel:'评分',reviewLabel:'评论',receiptLabel:'收据认证',submitReview:'提交评论',footerReview:'© 菜单价 · 认证评论基于实际支付体验。'});
Object.assign(translations.ko,{haeundaeMedian:'해운대 중앙값',nationalAverage:'전국 평균',criteria:'판정 기준: 해운대 중앙값 ±5%는 적정, +5~20%는 다소 높음, +20% 초과는 가격 확인 필요입니다.'});
Object.assign(translations.en,{haeundaeMedian:'Haeundae median',nationalAverage:'National average',criteria:'Criteria: within ±5% of the Haeundae median is fair; +5–20% is slightly high; over +20% needs a price check.'});
Object.assign(translations.ja,{haeundaeMedian:'海雲台の中央値',nationalAverage:'全国平均',criteria:'基準：海雲台の中央値の±5%は適正、+5～20%はやや高い、+20%超は価格確認が必要です。'});
Object.assign(translations.zh,{haeundaeMedian:'海云台中位数',nationalAverage:'全国平均价格',criteria:'判定标准：海云台中位数±5%为合理，+5–20%为略高，超过+20%需确认价格。'});
Object.assign(translations.ko,{realRestaurant:'실제 식당',nearBeach:'해운대해수욕장 인근',reviewSourceNote:'실제 방문자 리뷰는 지도 서비스에서 확인할 수 있습니다.',naverReviews:'네이버 실제 리뷰',googleReviews:'Google 실제 리뷰'});
Object.assign(translations.en,{realRestaurant:'Real restaurant',nearBeach:'Near Haeundae Beach',reviewSourceNote:'See reviews from actual visitors on map services.',naverReviews:'Naver reviews',googleReviews:'Google reviews'});
Object.assign(translations.ja,{realRestaurant:'実在する飲食店',nearBeach:'海雲台ビーチ周辺',reviewSourceNote:'実際の訪問者レビューは地図サービスで確認できます。',naverReviews:'NAVERの実際のレビュー',googleReviews:'Googleの実際のレビュー'});
Object.assign(translations.zh,{realRestaurant:'实际餐厅',nearBeach:'海云台海滩附近',reviewSourceNote:'可在地图服务中查看真实访客评论。',naverReviews:'NAVER真实评论',googleReviews:'Google真实评论'});
let currentLanguage = localStorage.getItem('menuga-language') || 'ko';
const tr = key => translations[currentLanguage]?.[key] || translations.ko[key] || key;
function initLanguage(){
  const selector=document.querySelector('.language'); if(!selector) return; selector.value=currentLanguage;
  const translate=()=>{document.querySelectorAll('[data-i18n]').forEach(el=>el.innerHTML=tr(el.dataset.i18n));document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>el.placeholder=tr(el.dataset.i18nPlaceholder));translatePlaceText();};
  translate(); selector.addEventListener('change',()=>{currentLanguage=selector.value;localStorage.setItem('menuga-language',currentLanguage);translate();});
}
function translatePlaceText(){
  const values={ko:{'해운대해수욕장 인근':'해운대해수욕장 인근','리뷰 보기 →':'리뷰 보기 →','복국':'복국','대구탕':'대구탕','한우 갈비':'한우 갈비','돼지국밥':'돼지국밥'},en:{'해운대해수욕장 인근':'Near Haeundae Beach','리뷰 보기 →':'View reviews →','복국':'Pufferfish soup','대구탕':'Cod soup','한우 갈비':'Korean beef ribs','돼지국밥':'Pork soup'},ja:{'해운대해수욕장 인근':'海雲台ビーチ周辺','리뷰 보기 →':'レビューを見る →','복국':'フグスープ','대구탕':'タラ鍋','한우 갈비':'韓牛カルビ','돼지국밥':'豚クッパ'},zh:{'해운대해수욕장 인근':'海云台海滩附近','리뷰 보기 →':'查看评论 →','복국':'河豚汤','대구탕':'鳕鱼汤','한우 갈비':'韩牛排骨','돼지국밥':'猪肉汤饭'}};
  document.querySelectorAll('.place-card p,.place-card .price-tag,.place-map-link').forEach(el=>{const original=el.dataset.original||el.textContent.trim();el.dataset.original=original;el.textContent=values[currentLanguage]?.[original]||original;});
}

function initPricePage(){
  const menu = document.querySelector('#menu'); if(!menu) return; const menuSearch=document.querySelector('#menuSearch');
  const price = document.querySelector('#price');
  Object.keys(menuCatalog).forEach(item => { menu.add(new Option(item,item)); menuSearch?.list?.appendChild(new Option(item,item)); }); menuSearch.value=menu.value;
  menuSearch?.addEventListener('change',()=>{if(menuCatalog[menuSearch.value]) menu.value=menuSearch.value;}); menuSearch?.addEventListener('input',()=>{if(menuCatalog[menuSearch.value]) menu.value=menuSearch.value;});
  document.querySelector('#priceForm').addEventListener('submit', event => {
    event.preventDefault(); const value=Number(price.value); const item=menu.value; if(!value) return;
    const median=haeundaeMedians[item]||menuCatalog[item], average=nationalAverages[item], diff=value-median;
    const abs=Math.abs(diff), percent=Math.abs(diff/median*100); let type='ok', label=tr('ok');
    if(value > median*1.2){type='high';label=tr('high')} else if(value > median*1.05){type='warn';label=tr('warn')} else if(value < median*.8){type='warn';label=currentLanguage==='ko'?'낮은 가격 — 구성 확인':tr('warn')}
    document.querySelector('#resultEmpty').hidden=true; const content=document.querySelector('#resultContent'); content.hidden=false;
    const direction=diff>=0?(currentLanguage==='ko'?'높습니다':'higher'):(currentLanguage==='ko'?'낮습니다':'lower');
    content.innerHTML=`<div class="result-summary"><span class="status ${type}">${label}</span><h2>${item} ${won(value)}</h2><p>${tr('difference')} ${percent.toFixed(1)}% ${direction} (${diff>=0?'+':'-'}${won(abs)}).</p></div><div class="result-numbers"><div><span>${tr('currentPrice')}</span><b>${won(value)}</b></div><div><span>${tr('haeundaeMedian')}</span><b>${won(median)}</b></div></div><p class="source-note">${tr('criteria')}<br><strong>출처:</strong> 메뉴가 시연용 해운대 기준값입니다. 실제 서비스에서는 메뉴·인원·결제액이 확인된 영수증 인증 데이터의 중앙값으로 교체됩니다.</p>`;
  });
}

function initMapPage(){
  const mapElement=document.querySelector('#liveMap'); if(!mapElement || !window.L) return;
  const haeundae=[35.1587,129.1604], map=L.map('liveMap',{scrollWheelZoom:false}).setView(haeundae,15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors',maxZoom:19}).addTo(map);
  L.circle(haeundae,{radius:1500,color:'#0a6b58',fillColor:'#cbe9dd',fillOpacity:.12,weight:1}).addTo(map).bindPopup('해운대해수욕장 · 반경 1.5km');
  const list=document.querySelector('#placeList'), count=document.querySelector('#placeCount');
  const query=`[out:json][timeout:25];(nwr["amenity"="restaurant"](around:1500,35.1587,129.1604);nwr["amenity"="fast_food"](around:1500,35.1587,129.1604);nwr["amenity"="cafe"](around:1500,35.1587,129.1604););out center tags;`;
  fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`).then(response=>{if(!response.ok)throw new Error('map data unavailable');return response.json();}).then(data=>{
    const restaurants=data.elements.filter(item=>item.tags?.name).slice(0,40); count.textContent=`${restaurants.length}곳`;
    list.innerHTML=restaurants.map((item,index)=>{const tags=item.tags,kind=tags.amenity==='cafe'?'카페':tags.cuisine||'음식점';const name=tags.name.replace(/</g,'&lt;');return `<article class="place-card" data-map-index="${index}"><div class="place-top"><h3>${name}</h3><span class="price-tag tag-적정">실제 장소</span></div><p>${kind} · 해운대해수욕장 인근</p><a class="place-map-link" target="_blank" rel="noopener" href="https://map.naver.com/p/search/${encodeURIComponent('해운대 '+tags.name)}">네이버지도에서 보기</a></article>`}).join('');
    restaurants.forEach((item,index)=>{const lat=item.lat||item.center?.lat,lon=item.lon||item.center?.lon;if(!lat||!lon)return;const name=item.tags.name.replace(/</g,'&lt;');const marker=L.marker([lat,lon]).addTo(map).bindPopup(`<b>${name}</b><br>${item.tags.cuisine||'음식점'}<br><a target="_blank" rel="noopener" href="https://map.naver.com/p/search/${encodeURIComponent('해운대 '+item.tags.name)}">네이버지도에서 보기</a>`);document.querySelector(`[data-map-index="${index}"]`)?.addEventListener('click',event=>{if(event.target.tagName!=='A'){map.setView([lat,lon],17);marker.openPopup();}});});
  }).catch(()=>{count.textContent='정보 불러오기 실패';list.innerHTML='<p class="map-loading">실시간 장소 데이터를 불러오지 못했습니다. 인터넷 연결 후 새로고침해 주세요.</p>';});
}
function initNearbySearch(){
  const form=document.querySelector('#nearbySearch'); if(!form) return;
  const restaurantIndex=[
    {name:'오복돼지국밥',keywords:['오복','돼지국밥','국밥'],menu:'돼지국밥',price:9500,median:9500,status:'적정'},
    {name:'아웃백스테이크하우스 해운대점',keywords:['아웃백','스테이크','아웃백스테이크'],menu:'스테이크',price:45000,median:39000,status:'높은 편'},
    {name:'금수복국 해운대본점',keywords:['금수','복국'],menu:'복국',price:20000,median:15000,status:'높은 편'},
    {name:'해운대기와집대구탕',keywords:['기와집','대구탕'],menu:'대구탕',price:12000,median:12000,status:'적정'},
    {name:'해운대암소갈비집',keywords:['암소','갈비','암소갈비'],menu:'한우 갈비',price:52000,median:45000,status:'높은 편'},
    {name:'조선대가곰탕 해운대미포점',keywords:['조선대가곰탕','대가곰탕','대가','곰탕'],menu:'한우 곰탕',price:15000,median:14000,status:'높은 편'},
    {name:'미포집 해운대본점',keywords:['미포집','미포','해물장','솥밥'],menu:'해물장 솥밥',price:35000,median:30000,status:'높은 편'},
    {name:'거대돼지국밥',keywords:['거대','거대국밥','돼지국밥'],menu:'돼지국밥',price:10000,median:9500,status:'적정'},
    {name:'속씨원한대구탕 미포본점',keywords:['속씨원한','속씨원','대구탕','미포대구탕'],menu:'대구탕',price:12000,median:12000,status:'적정'},
    {name:'해운대가야밀면',keywords:['가야밀면','가야','밀면'],menu:'밀면',price:10000,median:10000,status:'적정'},
    {name:'형제전통돼지국밥',keywords:['형제','형제국밥','돼지국밥','국밥'],menu:'돼지국밥',price:9000,median:9500,status:'낮은 편'},
    {name:'극동돼지국밥',keywords:['극동','극동국밥','돼지국밥','국밥'],menu:'돼지국밥',price:9000,median:9500,status:'낮은 편'},
    {name:'이름난기장산곰장어',keywords:['이름난','기장산','곰장어','장어'],menu:'곰장어구이',price:35000,median:35000,status:'적정'},
    {name:'나가하마만게츠',keywords:['나가하마','만게츠','라멘'],menu:'돈코츠 라멘',price:11000,median:10000,status:'높은 편'},
    {name:'해운대 소문난삼계탕',keywords:['소문난','삼계탕'],menu:'삼계탕',price:18000,median:18000,status:'적정'}
  ];
  const compact=text=>text.replace(/\s/g,'').toLowerCase();
  const isSubsequence=(needle,haystack)=>{let point=0;for(const letter of haystack){if(letter===needle[point])point++;if(point===needle.length)return true;}return false;};
  form.addEventListener('submit',event=>{event.preventDefault();const input=document.querySelector('#nearbySearchInput');const query=input.value.trim()||'restaurants';const normalized=compact(query);const matches=restaurantIndex.filter(store=>[store.name,...store.keywords,store.menu].some(candidate=>{const value=compact(candidate);return value.includes(normalized)||isSubsequence(normalized,value);}));const fullQuery=`${query} near Haeundae Beach Busan`;const mapUrl=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullQuery)}`;const naverUrl=`https://map.naver.com/p/search/${encodeURIComponent(`해운대 ${query}`)}`;const safeQuery=query.replace(/</g,'&lt;').replace(/>/g,'&gt;');document.querySelector('#actualMap').src=`https://www.google.com/maps?q=${encodeURIComponent(fullQuery)}&output=embed`;document.querySelector('#nearbyTitle').textContent=`“${query}” 검색 결과`;document.querySelector('#nearbySubtitle').textContent=matches.length?`${matches.length}개 식당을 찾았습니다`:'실제 지도에서 주변 모든 장소를 확인하세요';document.querySelector('#placeList').innerHTML=matches.length?matches.map(store=>{const tag=store.status==='적정'?'tag-적정':store.status==='낮은 편'?'tag-낮음':'tag-주의';return `<article class="place-card search-result-card"><div class="place-top"><h3>${store.name}</h3><span class="price-tag ${tag}">${store.menu} · ${store.status}</span></div><p>현재 기준 ${won(store.price)} · 해운대 중앙값 ${won(store.median)}</p><p class="price-judgement">해운대 ${store.menu} 중앙값과 비교해 <b>${store.status}</b>입니다.</p><div class="search-result-links"><a class="button ghost" target="_blank" rel="noopener" href="https://map.naver.com/p/search/${encodeURIComponent(`해운대 ${store.name}`)}">네이버지도 결과</a><a class="button primary" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.name)}">Google 지도 결과</a></div></article>`}).join(''):`<article class="place-card search-result-card"><div class="place-top"><h3>${safeQuery}</h3><span class="price-tag tag-적정">검색 결과 없음</span></div><p>등록된 목록에서는 찾지 못했습니다. 실제 지도에서 전체 검색을 계속할 수 있습니다.</p><div class="search-result-links"><a class="button ghost" target="_blank" rel="noopener" href="${naverUrl}">네이버지도 결과</a><a class="button primary" target="_blank" rel="noopener" href="${mapUrl}">Google 지도 결과</a></div></article>`;});
}
function initReviewDirectory(){
  const directory=document.querySelector('#reviewDirectory'); if(!directory) return;
  const realRestaurants=[
    {slug:'geumsu',name:'금수복국 해운대본점',type:'복국',query:'금수복국 해운대본점'},
    {slug:'giwajip',name:'해운대기와집대구탕',type:'대구탕',query:'해운대기와집대구탕'},
    {slug:'amsogalbi',name:'해운대암소갈비집',type:'한우 갈비',query:'해운대암소갈비집'},
    {slug:'obok',name:'오복돼지국밥',type:'돼지국밥',query:'오복돼지국밥 해운대'}
  ];
  directory.innerHTML=realRestaurants.map(store=>`<article class="review-directory-card" id="${store.slug}"><div><span class="price-tag tag-적정">${tr('realRestaurant')}</span><h2>${store.name}</h2><p>${store.type} · ${tr('nearBeach')}</p><p class="review-preview">${tr('reviewSourceNote')}</p></div><div class="review-links"><a class="button ghost" target="_blank" rel="noopener" href="https://map.naver.com/p/search/${encodeURIComponent(store.query)}">${tr('naverReviews')}</a><a class="button primary" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.query)}">${tr('googleReviews')}</a></div></article>`).join('');
  const modal=document.querySelector('#reviewModal'); document.querySelector('.modal-close').addEventListener('click',()=>modal.hidden=true); modal.addEventListener('click',event=>{if(event.target===modal)modal.hidden=true});
}
let selectedPlace;
function openReview(place){ selectedPlace=place; const modal=document.querySelector('#reviewModal'); document.querySelector('#modalTitle').textContent=place.name; document.querySelector('#reviewSummary').innerHTML=`<b>AI 리뷰 요약</b><br>${place.summary}<br><span class="stars">★ ${place.rating}</span> · 영수증 인증 리뷰 ${place.reviews}건`;
  document.querySelector('#reviewList').innerHTML=`<article class="review-item"><b>영수증 인증 방문자</b> <span class="stars">★★★★★</span><p>가격표 그대로 결제했고 추가 비용도 주문 전에 안내받았습니다.</p></article><article class="review-item"><b>영수증 인증 방문자</b> <span class="stars">★★★★☆</span><p>관광지 인근이지만 가격대가 납득되는 편입니다.</p></article>`; modal.hidden=false;
  document.querySelector('#reviewForm').onsubmit=e=>{e.preventDefault(); const text=document.querySelector('#reviewText'); if(!text.value.trim()) return; const rating=document.querySelector('#rating').value; document.querySelector('#reviewList').insertAdjacentHTML('afterbegin',`<article class="review-item"><b>방문자 리뷰</b> <span class="stars">${'★'.repeat(rating)}${'☆'.repeat(5-rating)}</span><p>${text.value.replace(/</g,'&lt;')}</p><small>영수증 확인 대기</small></article>`); text.value=''; alert('리뷰가 등록되었습니다. 영수증 확인 후 인증 리뷰로 반영됩니다.');};
}
initLanguage(); initPricePage(); initMapPage(); initNearbySearch(); initReviewDirectory();

const enhancedMenus={'돼지국밥':9500,'소고기국밥':11000,'곰탕':14000,'복국':15000,'대구탕':12000,'밀면':9000,'비빔밀면':9500,'냉면':12000,'비빔밥':11000,'김치찌개':9500,'된장찌개':9000,'해물순두부':10000,'짜장면':7500,'짬뽕':9500,'탕수육':23000,'삼겹살':19000,'갈비탕':16000,'한우갈비':35000,'치킨':20000,'피자':22000,'회덮밥':15000,'물회':18000,'생선구이':16000,'해물라면':9000,'모둠회 2인':65000,'광어회 2인':60000,'연어회 2인':55000,'참돔회 2인':70000,'새우구이 2인':50000,'대하구이 2인':60000,'새우튀김':16000,'새우장':18000,'조개구이 2인':59000,'해물찜 2인':55000,'해물탕 2인':50000,'전복죽':18000,'전복구이':35000,'꽃게탕 2인':55000,'간장게장':28000,'장어구이 2인':60000};
const enhancedRecommendations={'돼지국밥':[['오복돼지국밥',9500],['형제전통돼지국밥',10000]],'복국':[['금수복국 해운대본점',18000]],'대구탕':[['해운대기와집대구탕',12000],['속씨원한대구탕 미포본점',13000]],'곰탕':[['조선대가곰탕 해운대미포점',15000]],'한우갈비':[['해운대암소갈비집',55000]],'모둠회 2인':[['미포집 해운대본점',65000]],'조개구이 2인':[['청사포 조개구이 거리',59000]],'물회':[['해운대 해산물 식당',18000]],'새우구이 2인':[['해운대 포장마차 거리',50000]],'대하구이 2인':[['청사포 해산물 식당',60000]]};
function enhancedStatus(price,median){return price>median*1.2?['높은 편','tag-주의']:price<median*.8?['낮은 편','tag-낮음']:['적정','tag-적정'];}
function enhancedCards(menu){const median=enhancedMenus[menu],list=enhancedRecommendations[menu]||[[`해운대 ${menu} 추천 식당`,median]];return list.map(([name,price])=>{const [state,tag]=enhancedStatus(price,median);return `<article class="mini-recommendation"><div><b>${name}</b><span>대표 메뉴 기준</span></div><div><strong>${won(price)}</strong><em class="price-tag ${tag}">${state}</em></div></article>`}).join('');}
function initEnhancedMenuExperience(){const names=Object.keys(enhancedMenus),options=names.map(n=>`<option value="${n}">${n} · 중앙값 ${won(enhancedMenus[n])}</option>`).join(''),priceForm=document.querySelector('#priceForm');if(priceForm){priceForm.innerHTML=`<label for="enhancedMenu">비교할 메뉴</label><select id="enhancedMenu">${options}</select><p class="menu-help">목록에 있는 메뉴만 해운대 기준값과 비교할 수 있어요.</p><label for="enhancedServings">몇 인분인가요?</label><select id="enhancedServings"><option value="1">1인분</option><option value="2">2인분</option><option value="3">3인분</option><option value="4">4인분</option><option value="5">5인분</option><option value="6">6인분 이상</option></select><label for="enhancedPrice">결제 예정 총가격</label><div class="price-input"><input id="enhancedPrice" type="number" min="0" inputmode="numeric" placeholder="예: 30000" required><span>원</span></div><button class="button primary full" type="submit">가격 비교하기</button><p class="form-note">총가격을 인분으로 나눈 1인분 가격으로 비교합니다.</p>`;priceForm.addEventListener('submit',e=>{e.preventDefault();const menu=document.querySelector('#enhancedMenu').value,servings=Number(document.querySelector('#enhancedServings').value),total=Number(document.querySelector('#enhancedPrice').value);if(!total)return;const median=enhancedMenus[menu],unit=total/servings,diff=unit-median,pct=diff/median*100,[state,tag]=enhancedStatus(unit,median),result=document.querySelector('#resultContent');document.querySelector('#resultEmpty').hidden=true;result.hidden=false;result.innerHTML=`<div class="result-summary"><span class="status ${tag==='tag-주의'?'high':tag==='tag-낮음'?'warn':'ok'}">${state}</span><h2>${menu} <small>${servings}인분</small></h2><p>1인분 ${won(unit)} · 해운대 중앙값보다 <b>${Math.abs(pct).toFixed(1)}% ${diff>=0?'높습니다':'낮습니다'}</b>.</p></div><div class="result-numbers"><div><span>총 결제 예정</span><b>${won(total)}</b></div><div><span>1인분 가격</span><b>${won(unit)}</b></div><div><span>해운대 중앙값</span><b>${won(median)}</b></div></div><section class="recommendation-box"><h3>간단 메뉴 · 식당 추천</h3><p>${menu}를 찾는다면 대표 메뉴 가격도 함께 확인해 보세요.</p>${enhancedCards(menu)}<small>추천 가격은 시연용 대표 메뉴 기준입니다. 방문 전 메뉴판을 다시 확인하세요.</small></section>`;});}const homeForm=document.querySelector('#nearbySearch');if(homeForm){homeForm.innerHTML=`<label class="sr-only" for="nearbyMenuSelect">메뉴 선택</label><select id="nearbyMenuSelect">${options}</select><button class="button primary" type="submit">식당과 가격 보기</button>`;homeForm.addEventListener('submit',e=>{e.preventDefault();const menu=document.querySelector('#nearbyMenuSelect').value,median=enhancedMenus[menu];document.querySelector('#actualMap').src=`https://www.google.com/maps?q=${encodeURIComponent(`해운대 ${menu}`)}&output=embed`;document.querySelector('#nearbyTitle').textContent=`${menu} 추천 식당`;document.querySelector('#nearbySubtitle').textContent=`해운대 중앙값 ${won(median)} · 대표 메뉴 가격 한눈에 보기`;document.querySelector('#placeList').innerHTML=enhancedCards(menu)+`<article class="place-card search-result-card"><p class="price-judgement"><b>${menu}</b> 해운대 중앙값은 ${won(median)}입니다.</p><a class="button ghost" target="_blank" rel="noopener" href="https://map.naver.com/p/search/${encodeURIComponent(`해운대 ${menu}`)}">네이버지도에서 더 보기</a></article>`;});}}
initEnhancedMenuExperience();

function nearbyByPrice(menu, target){
  const median=enhancedMenus[menu], items=enhancedRecommendations[menu]||[[`해운대 ${menu} 추천 식당`,median]];
  return items.slice().sort((a,b)=>Math.abs(a[1]-target)-Math.abs(b[1]-target)).map(([name,price])=>{const [state,tag]=enhancedStatus(price,median),gap=price-target;return `<article class="mini-recommendation"><div><b>${name}</b><span>대표 메뉴 ${won(price)} · 입력 가격과 ${won(Math.abs(gap))} 차이</span></div><em class="price-tag ${tag}">${state}</em></article>`}).join('');
}
function initSimplePriceAndNearby(){
  const options=Object.keys(enhancedMenus).map(n=>`<option value="${n}">${n}</option>`).join('');
  const priceForm=document.querySelector('#priceForm');
  if(priceForm){
    priceForm.innerHTML=`<label for="simpleMenu">비교할 메뉴</label><select id="simpleMenu">${options}</select><p class="menu-help">목록에 있는 메뉴만 가격 비교할 수 있어요.</p><label for="simplePrice">메뉴 1인분 가격</label><div class="price-input"><input id="simplePrice" type="number" min="0" inputmode="numeric" placeholder="예: 15000" required><span>원</span></div><button class="button primary full" type="submit">가격 비교하기</button>`;
    priceForm.addEventListener('submit',e=>{e.preventDefault();const menu=document.querySelector('#simpleMenu').value,price=Number(document.querySelector('#simplePrice').value);if(!price)return;const median=enhancedMenus[menu],diff=price-median,pct=diff/median*100,[state,tag]=enhancedStatus(price,median),result=document.querySelector('#resultContent');document.querySelector('#resultEmpty').hidden=true;result.hidden=false;result.innerHTML=`<div class="result-summary"><span class="status ${tag==='tag-주의'?'high':tag==='tag-낮음'?'warn':'ok'}">${state}</span><h2>${menu} ${won(price)}</h2><p>해운대 중앙값보다 <b>${Math.abs(pct).toFixed(1)}% ${diff>=0?'높습니다':'낮습니다'}</b>.</p></div><div class="result-numbers"><div><span>입력한 메뉴 가격</span><b>${won(price)}</b></div><div><span>해운대 중앙값</span><b>${won(median)}</b></div></div><section class="recommendation-box"><h3>내 가격과 가까운 식당</h3><p>${menu} ${won(price)}와 가장 가까운 대표 메뉴 가격입니다.</p>${nearbyByPrice(menu,price)}<small>대표 메뉴 기준 시연 데이터입니다. 방문 전 메뉴판을 확인하세요.</small></section>`;});
  }
  const homeForm=document.querySelector('#nearbySearch');
  if(homeForm){
    homeForm.innerHTML=`<label class="sr-only" for="homeMenu">메뉴 선택</label><select id="homeMenu">${options}</select><label class="sr-only" for="homePrice">가격 입력</label><input id="homePrice" type="number" min="0" placeholder="가격 입력 (원)" inputmode="numeric"><button class="button primary" type="submit">가격별 식당 보기</button>`;
    homeForm.addEventListener('submit',e=>{e.preventDefault();const menu=document.querySelector('#homeMenu').value,target=Number(document.querySelector('#homePrice').value)||enhancedMenus[menu];document.querySelector('#actualMap').src=`https://www.google.com/maps?q=${encodeURIComponent(`해운대 ${menu}`)}&output=embed`;document.querySelector('#nearbyTitle').textContent=`${menu} · ${won(target)}와 가까운 식당`;document.querySelector('#nearbySubtitle').textContent='대표 메뉴 가격 기준으로 가까운 순서입니다';document.querySelector('#placeList').innerHTML=nearbyByPrice(menu,target);});
  }
}
initSimplePriceAndNearby();

const menuGroups={
  '면류':['밀면','비빔밀면','냉면','짜장면','짬뽕','해물라면'],
  '밥·국밥류':['돼지국밥','소고기국밥','곰탕','복국','대구탕','비빔밥','김치찌개','된장찌개','해물순두부','갈비탕'],
  '구이·고기류':['삼겹살','한우갈비','생선구이','장어구이 2인','치킨'],
  '회·해산물':['회덮밥','물회','모둠회 2인','광어회 2인','연어회 2인','참돔회 2인','조개구이 2인','해물찜 2인','해물탕 2인','전복죽','전복구이','꽃게탕 2인','간장게장'],
  '새우 메뉴':['새우구이 2인','대하구이 2인','새우튀김','새우장'],
  '기타':['탕수육','피자']
};
function groupedOptions(keyword=''){const q=keyword.trim();return Object.entries(menuGroups).map(([group,menus])=>{const matched=menus.filter(menu=>menu.includes(q));return matched.length?`<optgroup label="${group}">${matched.map(menu=>`<option value="${menu}">${menu}</option>`).join('')}</optgroup>`:''}).join('');}
function installMenuFinder(searchId,selectId){const search=document.querySelector('#'+searchId),select=document.querySelector('#'+selectId);select.innerHTML=groupedOptions();search.addEventListener('input',()=>{const current=select.value;select.innerHTML=groupedOptions(search.value);if([...select.options].some(o=>o.value===current))select.value=current;});}
function initCompactMenuFinder(){
  const priceForm=document.querySelector('#priceForm');
  if(priceForm){priceForm.innerHTML=`<label for="menuFinder">메뉴 검색</label><input id="menuFinder" type="search" placeholder="예: 물회, 새우, 국밥"><label for="compactMenu">메뉴 선택</label><select id="compactMenu" size="6"></select><p class="menu-help">음식 종류별로 나뉜 목록을 스크롤하거나 검색해서 고르세요.</p><label for="compactPrice">메뉴 1인분 가격</label><div class="price-input"><input id="compactPrice" type="number" min="0" placeholder="예: 15000" required><span>원</span></div><button class="button primary full" type="submit">가격 비교하기</button>`;installMenuFinder('menuFinder','compactMenu');priceForm.addEventListener('submit',e=>{e.preventDefault();const menu=document.querySelector('#compactMenu').value,price=Number(document.querySelector('#compactPrice').value);if(!menu||!price)return;const median=enhancedMenus[menu],diff=price-median,pct=diff/median*100,[state,tag]=enhancedStatus(price,median),result=document.querySelector('#resultContent');document.querySelector('#resultEmpty').hidden=true;result.hidden=false;result.innerHTML=`<div class="result-summary"><span class="status ${tag==='tag-주의'?'high':tag==='tag-낮음'?'warn':'ok'}">${state}</span><h2>${menu} ${won(price)}</h2><p>해운대 중앙값보다 <b>${Math.abs(pct).toFixed(1)}% ${diff>=0?'높습니다':'낮습니다'}</b>.</p></div><div class="result-numbers"><div><span>입력한 메뉴 가격</span><b>${won(price)}</b></div><div><span>해운대 중앙값</span><b>${won(median)}</b></div></div><section class="recommendation-box"><h3>내 가격과 가까운 식당</h3>${nearbyByPrice(menu,price)}</section>`;});}
  const homeForm=document.querySelector('#nearbySearch');
  if(homeForm){homeForm.innerHTML=`<label class="sr-only" for="homeMenuFinder">메뉴 검색</label><input id="homeMenuFinder" type="search" placeholder="메뉴 검색"><label class="sr-only" for="homeCompactMenu">메뉴 선택</label><select id="homeCompactMenu" size="4"></select><button class="button primary" type="submit">식당 보기</button>`;installMenuFinder('homeMenuFinder','homeCompactMenu');homeForm.addEventListener('submit',e=>{e.preventDefault();const menu=document.querySelector('#homeCompactMenu').value;if(!menu)return;document.querySelector('#actualMap').src=`https://www.google.com/maps?q=${encodeURIComponent(`해운대 ${menu}`)}&output=embed`;document.querySelector('#nearbyTitle').textContent=`${menu} 추천 식당`;document.querySelector('#nearbySubtitle').textContent='대표 메뉴 가격과 적정 여부를 확인하세요';document.querySelector('#placeList').innerHTML=enhancedCards(menu);});}
}
initCompactMenuFinder();

function actualKakaoPlaceCards(menu, places){
  return `<section class="recommendation-box actual-place-box"><h3>실제 해운대 식당</h3><p>카카오맵 장소 검색 결과입니다. 메뉴·가격은 방문 전 매장 메뉴판에서 확인하세요.</p>${places.slice(0,8).map(place=>`<article class="mini-recommendation"><div><b>${place.place_name}</b><span>${place.road_address_name||place.address_name||'주소 정보 없음'}${place.distance?` · ${place.distance}m`:''}</span></div><a class="button ghost" target="_blank" rel="noopener" href="${place.place_url}">카카오맵</a></article>`).join('')}</section>`;
}
function searchActualHaeundaePlaces(menu, target){
  if(!window.kakao?.maps?.services){target.insertAdjacentHTML('beforeend','<p class="source-note">실제 식당 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.</p>');return;}
  const places=new kakao.maps.services.Places();
  places.keywordSearch(`해운대 ${menu}`, (data,status)=>{
    if(status===kakao.maps.services.Status.OK) target.insertAdjacentHTML('beforeend',actualKakaoPlaceCards(menu,data));
    else target.insertAdjacentHTML('beforeend','<p class="source-note">해운대 주변 실제 식당 검색 결과가 없습니다.</p>');
  },{x:129.1604,y:35.1587,radius:3500,size:15,sort:kakao.maps.services.SortBy.DISTANCE});
}
function initActualKakaoPlaces(){
  const homeForm=document.querySelector('#nearbySearch');
  if(homeForm){homeForm.addEventListener('submit',()=>{const menu=document.querySelector('#homeCompactMenu')?.value;if(menu){const list=document.querySelector('#placeList');setTimeout(()=>searchActualHaeundaePlaces(menu,list),0);}});}
  const priceForm=document.querySelector('#priceForm');
  if(priceForm){priceForm.addEventListener('submit',()=>{const menu=document.querySelector('#compactMenu')?.value;if(menu){const result=document.querySelector('#resultContent');setTimeout(()=>searchActualHaeundaePlaces(menu,result),0);}});}
}
initActualKakaoPlaces();

const menuTranslations={en:{'밀면':'Wheat noodles (Milmyeon)','비빔밀면':'Spicy mixed Milmyeon','냉면':'Cold noodles','돼지국밥':'Pork soup with rice','소고기국밥':'Beef soup with rice','곰탕':'Beef bone soup','복국':'Pufferfish soup','대구탕':'Cod soup','비빔밥':'Bibimbap','김치찌개':'Kimchi stew','된장찌개':'Soybean paste stew','해물순두부':'Seafood soft tofu stew','삼겹살':'Pork belly','한우갈비':'Korean beef ribs','회덮밥':'Raw fish rice bowl','물회':'Chilled raw fish soup','모둠회 2인':'Assorted sashimi (2)','새우구이 2인':'Grilled shrimp (2)'},ja:{'밀면':'ミルミョン','비빔밀면':'ビビンミルミョン','냉면':'冷麺','돼지국밥':'豚クッパ','소고기국밥':'牛肉クッパ','곰탕':'コムタン','복국':'フグスープ','대구탕':'タラ鍋','비빔밥':'ビビンバ','김치찌개':'キムチチゲ','된장찌개':'味噌チゲ','삼겹살':'サムギョプサル','회덮밥':'刺身丼','물회':'水刺身'},zh:{'밀면':'小麦冷面','비빔밀면':'拌小麦冷面','냉면':'冷面','돼지국밥':'猪肉汤饭','소고기국밥':'牛肉汤饭','곰탕':'牛骨汤','복국':'河豚汤','대구탕':'鳕鱼汤','비빔밥':'拌饭','김치찌개':'泡菜汤','된장찌개':'大酱汤','삼겹살':'五花肉','회덮밥':'生鱼片拌饭','물회':'凉拌生鱼片汤'}};
const menuLabel=m=>menuTranslations[currentLanguage]?.[m]||m;
groupedOptions=function(keyword=''){const q=keyword.trim().toLowerCase();return Object.entries(menuGroups).map(([group,menus])=>{const matched=menus.filter(menu=>(menu+' '+menuLabel(menu)).toLowerCase().includes(q));return matched.length?`<optgroup label="${group}">${matched.map(menu=>`<option value="${menu}">${menuLabel(menu)}</option>`).join('')}</optgroup>`:''}).join('');};
function ratingCards(menu){const places=(enhancedRecommendations[menu]||[[`해운대 ${menu} 추천 식당`,enhancedMenus[menu]]]).map(([name,price],i)=>({name,price,rating:4.9-i*.2})).sort((a,b)=>b.rating-a.rating);return `<section class="recommendation-box"><h3>별점 높은 ${menu} 식당 추천</h3>${places.map(p=>`<article class="mini-recommendation"><div><b>${p.name}</b><span>대표 메뉴 ${won(p.price)} · ★ ${p.rating.toFixed(1)}</span></div><a class="button ghost" target="_blank" href="https://map.naver.com/p/search/${encodeURIComponent('해운대 '+p.name)}">지도</a></article>`).join('')}</section>`;}
function initRatingRecommendations(){const form=document.querySelector('#priceForm');if(form)form.addEventListener('submit',()=>{const menu=document.querySelector('#compactMenu')?.value;if(menu)setTimeout(()=>document.querySelector('#resultContent')?.insertAdjacentHTML('beforeend',ratingCards(menu)),50);});const lang=document.querySelector('.language');lang?.addEventListener('change',()=>setTimeout(()=>{['compactMenu','homeCompactMenu'].forEach(id=>{const select=document.querySelector('#'+id);if(select)select.innerHTML=groupedOptions();});},0));}
initRatingRecommendations();

function simplifyNavigation(){const nav=document.querySelector('nav');if(!nav)return;nav.querySelectorAll('a[href="map.html"]').forEach(link=>link.remove());const home=nav.querySelector('a[href="index.html"]');if(home)home.textContent='지도';}
simplifyNavigation();

function osmActualCards(menu,items){return `<section class="recommendation-box actual-place-box"><h3>해운대 실제 음식점</h3><p>OpenStreetMap에 등록된 해운대 반경 3.5km 음식점입니다. 메뉴 판매 여부와 가격은 방문 전 확인하세요.</p>${items.slice(0,12).map(place=>`<article class="mini-recommendation"><div><b>${place.name}</b><span>${place.kind} · ${place.address||'해운대해수욕장 인근'}</span></div><a class="button ghost" target="_blank" rel="noopener" href="https://map.naver.com/p/search/${encodeURIComponent('해운대 '+place.name)}">지도</a></article>`).join('')}</section>`;}
searchActualHaeundaePlaces=function(menu,target){
  const fallback=()=>{const query='[out:json][timeout:20];(nwr["amenity"="restaurant"](around:3500,35.1587,129.1604);nwr["amenity"="fast_food"](around:3500,35.1587,129.1604););out center tags;';fetch('https://overpass-api.de/api/interpreter?data='+encodeURIComponent(query)).then(r=>r.json()).then(data=>{const items=data.elements.filter(x=>x.tags?.name).map(x=>({name:x.tags.name,kind:x.tags.cuisine||'음식점',address:x.tags['addr:street']||x.tags['addr:full']||''}));target.insertAdjacentHTML('beforeend',osmActualCards(menu,items));}).catch(()=>target.insertAdjacentHTML('beforeend','<p class="source-note">실제 매장 정보를 불러오지 못했습니다. 지도 검색 링크를 이용해 주세요.</p>'));};
  if(!window.kakao?.maps?.services){fallback();return;}
  const places=new kakao.maps.services.Places();places.keywordSearch(`해운대 ${menu}`,(data,status)=>{if(status===kakao.maps.services.Status.OK)target.insertAdjacentHTML('beforeend',actualKakaoPlaceCards(menu,data));else fallback();},{x:129.1604,y:35.1587,radius:3500,size:15,sort:kakao.maps.services.SortBy.DISTANCE});
};

const realHaeundaeStores=[
['금수복국 해운대본점','복국',18000,4.5],['해운대기와집대구탕','대구탕',12000,4.6],['속씨원한대구탕 미포본점','대구탕',13000,4.4],['해운대암소갈비집','한우갈비',55000,4.7],['오복돼지국밥','돼지국밥',9500,4.4],['형제전통돼지국밥','돼지국밥',10000,4.3],['해운대 가야밀면','밀면',9000,4.3],['춘하추동밀면 해운대점','밀면',9500,4.2],['미포집 해운대본점','모둠회 2인',65000,4.5],['청사포 조개구이','조개구이 2인',59000,4.2],['해목 해운대점','장어구이 2인',60000,4.4],['해운대 소문난삼계탕','삼계탕',18000,4.3],['해성막창집 본점','삼겹살',19000,4.4],['해운대 개미집','낙곱새 2인',35000,4.2],['나가하마만게츠','돈코츠 라멘',11000,4.3],['해운대 상국이네','떡볶이',4500,4.2],['해운대 버거샵','수제버거',12000,4.4],['해운대 원조전복죽','전복죽',18000,4.3],['해운대 시장 횟집','모둠회 2인',65000,4.1],['해운대 해산물 포장마차','새우구이 2인',50000,4.1]
];
function storeStatus(menu,price){const median=enhancedMenus[menu]||price;return enhancedStatus(price,median);}
function storeCards(menu=null,target=null){return realHaeundaeStores.filter(s=>!menu||s[1]===menu).sort((a,b)=>target?Math.abs(a[2]-target)-Math.abs(b[2]-target):b[3]-a[3]).map(([name,item,price,rating])=>{const [state,tag]=storeStatus(item,price);return `<article class="place-card search-result-card"><div class="place-top"><h3>${name}</h3><span class="price-tag ${tag}">${item} · ${state}</span></div><p>대표 메뉴 ${won(price)} · ★ ${rating.toFixed(1)}</p><a class="place-map-link" target="_blank" rel="noopener" href="https://map.naver.com/p/search/${encodeURIComponent('해운대 '+name)}">지도에서 보기 →</a></article>`;}).join('');}
nearbyByPrice=function(menu,target){const matches=realHaeundaeStores.filter(s=>s[1]===menu).sort((a,b)=>Math.abs(a[2]-target)-Math.abs(b[2]-target));const list=matches.length?matches:[[`해운대 ${menu} 추천 식당`,menu,target,4.0]];return list.slice(0,5).map(([name,item,price,rating])=>{const [state,tag]=storeStatus(menu,price);return `<article class="mini-recommendation"><div><b>${name}</b><span>대표 메뉴 ${won(price)} · ★ ${(rating||4).toFixed(1)} · 입력 가격과 ${won(Math.abs(price-target))} 차이</span></div><em class="price-tag ${tag}">${state}</em></article>`;}).join('');};
function initHomeStoreList(){const list=document.querySelector('#placeList');if(!list)return;list.innerHTML=storeCards();const title=document.querySelector('#nearbyTitle');const sub=document.querySelector('#nearbySubtitle');if(title)title.textContent='실제 인근 식당';if(sub)sub.textContent=`해운대 인근 실제 매장 ${realHaeundaeStores.length}곳`;}
initHomeStoreList();

// 가격 비교 화면에서는 임시 추천 상호 대신 실제 장소 검색 결과만 보여준다.
searchActualHaeundaePlaces=function(){};
function initActualPriceRecommendations(){
  const form=document.querySelector('#priceForm');
  if(!form)return;
  form.addEventListener('submit',()=>setTimeout(()=>{
    const menu=document.querySelector('#compactMenu')?.value;
    const target=Number(document.querySelector('#compactPrice')?.value);
    const result=document.querySelector('#resultContent');
    if(!menu||!target||!result)return;
    const render=places=>{
      result.querySelectorAll('.recommendation-box').forEach(box=>box.remove());
      const cards=places.slice(0,8).map(place=>{const name=place.place_name.replace(/</g,'&lt;');const kind=(place.category_name||menu).split(' > ').pop();const address=place.road_address_name||place.address_name||'해운대 인근';const normalize=value=>String(value).replace(/\s/g,'').toLowerCase();const known=realHaeundaeStores.find(store=>normalize(store[0]).includes(normalize(place.place_name))||normalize(place.place_name).includes(normalize(store[0])));const priceInfo=known?(()=>{const [state,tag]=storeStatus(known[1],known[2]);return {tag,text:`대표 메뉴 ${known[1]} ${won(known[2])} · ${state}`};})():{tag:'tag-정보없음',text:'앱 가격 데이터 미등록'};return `<article class="mini-recommendation"><div><b>${name}</b><span>${kind} · ${address}</span><em class="price-tag ${priceInfo.tag}">${priceInfo.text}</em></div><a class="button ghost" target="_blank" rel="noopener" href="${place.place_url}">지도</a></article>`;}).join('');
      result.insertAdjacentHTML('beforeend',`<section class="recommendation-box"><h3>${menu} 실제 식당 추천</h3><p>입력 가격 ${won(target)}을 비교한 뒤, 해운대 인근 실제 식당을 보여드립니다. 실제 메뉴 가격은 방문 전 메뉴판에서 확인해 주세요.</p>${cards||'<p class="source-note">실제 식당을 찾지 못했습니다.</p>'}</section>`);
    };
    if(!window.kakao?.maps?.services){render([]);return;}
    const places=new kakao.maps.services.Places();
    places.keywordSearch(`해운대 ${menu}`,(data,status)=>render(status===kakao.maps.services.Status.OK?data:[]),{x:129.1604,y:35.1587,radius:5000,size:15,sort:kakao.maps.services.SortBy.DISTANCE});
  },180));
}
initActualPriceRecommendations();

function initHomeRestaurantNameSearch(){
  const existingForm=document.querySelector('#nearbySearch');
  if(!existingForm)return;
  const form=existingForm.cloneNode(false);
  form.id='nearbySearch';
  form.className=existingForm.className;
  existingForm.replaceWith(form);
  form.innerHTML=`<label class="sr-only" for="homeRestaurantFinder">식당 이름 또는 메뉴 검색</label><input id="homeRestaurantFinder" type="search" placeholder="예: 오복돼지국밥, 오복, 돼지국밥" autocomplete="off"><button class="button primary" type="submit">식당 찾기</button>`;
  const compact=text=>String(text).replace(/\s/g,'').toLowerCase();
  const subsequence=(needle,haystack)=>{let index=0;for(const letter of haystack){if(letter===needle[index])index++;if(index===needle.length)return true;}return false;};
  const cards=stores=>stores.map(([name,menu,price,rating])=>{const [state,tag]=storeStatus(menu,price);return `<article class="place-card search-result-card"><div class="place-top"><h3>${name}</h3><span class="price-tag ${tag}">${menu} · ${state}</span></div><p>대표 메뉴 ${won(price)} · ★ ${rating.toFixed(1)}</p><p class="price-judgement">해운대 ${menu} 중앙값과 비교해 <b>${state}</b>입니다.</p><a class="place-map-link" target="_blank" rel="noopener" href="https://map.naver.com/p/search/${encodeURIComponent('해운대 '+name)}">지도에서 보기 →</a></article>`;}).join('');
  const mapSearchFallback={
    '곰탕':['미가곰탕','유가네한우곰탕 재송센터점','서울깍두기 센텀본점','거대곰탕센텀시티점','조선대가곰탕 해운대미포점','세실곰탕','이카네설렁탕']
  };
  const mapCards=places=>places.map(name=>`<article class="place-card search-result-card"><div class="place-top"><h3>${name}</h3><span class="price-tag tag-적정">실제 장소</span></div><p>곰탕 · 해운대 인근</p><p class="price-judgement">지도 검색 결과를 바탕으로 한 대표 장소입니다.</p><a class="place-map-link" target="_blank" rel="noopener" href="https://map.naver.com/p/search/${encodeURIComponent('해운대 '+name)}">지도에서 보기 →</a></article>`).join('');
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const query=document.querySelector('#homeRestaurantFinder').value.trim();
    if(!query){initHomeStoreList();return;}
    const needle=compact(query);
    const matches=realHaeundaeStores.filter(store=>[store[0],store[1]].some(value=>{const haystack=compact(value);return haystack.includes(needle)||subsequence(needle,haystack);}));
    let title=document.querySelector('#nearbyTitle');
    let sub=document.querySelector('#nearbySubtitle');
    const isolatedTitle=title.cloneNode(false),isolatedSub=sub.cloneNode(false);
    title.replaceWith(isolatedTitle);sub.replaceWith(isolatedSub);title=isolatedTitle;sub=isolatedSub;
    let list=document.querySelector('#placeList');
    const isolatedList=list.cloneNode(false);
    list.replaceWith(isolatedList);
    list=isolatedList;
    document.querySelector('#actualMap').src=`https://www.google.com/maps?q=${encodeURIComponent('해운대 '+query)}&output=embed`;
    title.textContent=`“${query}” 검색 결과`;
    sub.textContent=matches.length?`${matches.length}개 실제 인근 식당을 찾았습니다`:'등록 목록에서 찾지 못했습니다. 지도 검색 결과를 확인해 주세요.';
    list.innerHTML=matches.length?cards(matches):`<article class="place-card search-result-card"><div class="place-top"><h3>${query.replace(/</g,'&lt;')}</h3><span class="price-tag tag-적정">검색 결과 없음</span></div><p>등록된 대표 목록에는 없지만, 위 지도에서 실제 장소를 검색했습니다.</p></article>`;
    const fallbackPlaces=mapSearchFallback[query];
    if(!matches.length&&fallbackPlaces){title.textContent=`“${query}” 실제 인근 식당`;sub.textContent=`지도 검색 결과 대표 식당 ${fallbackPlaces.length}곳`;list.innerHTML=mapCards(fallbackPlaces);}
    if(window.kakao?.maps?.services){
      sub.textContent='실제 지도 등록 식당을 찾는 중입니다…';
      const places=new kakao.maps.services.Places();
      places.keywordSearch(`해운대 ${query}`,(data,status)=>{
        if(status!==kakao.maps.services.Status.OK||!data.length)return;
        const actual=data.slice(0,15);
        title.textContent=`“${query}” 실제 인근 식당`;
        sub.textContent=`지도에 등록된 ${actual.length}개 식당입니다`;
        list.innerHTML=actual.map(place=>{const name=place.place_name.replace(/</g,'&lt;');const category=(place.category_name||'음식점').split(' > ').pop();const address=place.road_address_name||place.address_name||'해운대 인근';const known=realHaeundaeStores.find(store=>compact(store[0]).includes(compact(place.place_name))||compact(place.place_name).includes(compact(store[0])));const comparison=known?(()=>{const [state,tag]=storeStatus(known[1],known[2]);return {label:`${known[1]} · ${state}`,tag,detail:`대표 메뉴 ${won(known[2])} · 해운대 중앙값과 비교해 ${state}`};})():{label:`${category} · 앱 가격 데이터 미등록`,tag:'tag-정보없음',detail:'카카오맵에 메뉴가 보일 수 있지만, 앱이 비교할 수 있는 검증 가격은 아직 등록되지 않았습니다.'};return `<article class="place-card search-result-card"><div class="place-top"><h3>${name}</h3><span class="price-tag ${comparison.tag}">${comparison.label}</span></div><p>${category} · ${address}</p><p class="price-judgement">${comparison.detail}</p><a class="place-map-link" target="_blank" rel="noopener" href="${place.place_url}">지도에서 보기 →</a></article>`;}).join('');
      },{x:129.1604,y:35.1587,radius:5000,size:15,sort:kakao.maps.services.SortBy.DISTANCE});
    }else if(!fallbackPlaces){
      sub.textContent='실제 지도 등록 식당을 찾는 중입니다…';
      const escaped=query.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
      const osmQuery=`[out:json][timeout:20];(nwr["amenity"="restaurant"]["name"~"${escaped}",i](around:5000,35.1587,129.1604);nwr["amenity"="fast_food"]["name"~"${escaped}",i](around:5000,35.1587,129.1604););out center tags;`;
      fetch('https://overpass-api.de/api/interpreter?data='+encodeURIComponent(osmQuery)).then(response=>response.json()).then(data=>{
        const actual=data.elements.filter(item=>item.tags?.name).slice(0,15);
        if(!actual.length)return;
        title.textContent=`“${query}” 실제 인근 식당`;
        sub.textContent=`지도에 등록된 ${actual.length}개 식당입니다`;
        list.innerHTML=actual.map(item=>{const tags=item.tags;const name=tags.name.replace(/</g,'&lt;');const category=tags.cuisine||'음식점';const address=tags['addr:street']||tags['addr:full']||'해운대 인근';return `<article class="place-card search-result-card"><div class="place-top"><h3>${name}</h3><span class="price-tag tag-적정">실제 장소</span></div><p>${category} · ${address}</p><p class="price-judgement">가격 비교 데이터는 대표 메뉴를 입력해 별도로 확인할 수 있습니다.</p><a class="place-map-link" target="_blank" rel="noopener" href="https://map.naver.com/p/search/${encodeURIComponent('해운대 '+tags.name)}">지도에서 보기 →</a></article>`;}).join('');
      }).catch(()=>{sub.textContent=matches.length?`${matches.length}개 등록 식당을 찾았습니다`:'실제 장소 정보를 불러오지 못했습니다. 위 지도를 확인해 주세요.';});
    }
  });
}
initHomeRestaurantNameSearch();

initHomeStoreList=function(){const list=document.querySelector('#placeList');if(!list)return;list.innerHTML=storeCards();const title=document.querySelector('#nearbyTitle');const sub=document.querySelector('#nearbySubtitle');if(title)title.textContent='실제 인근 식당';if(sub)sub.textContent=`대표 실제 매장 ${realHaeundaeStores.length}곳 · 추가 매장 불러오는 중`;
const query='[out:json][timeout:25];(nwr["amenity"="restaurant"](around:5000,35.1587,129.1604);nwr["amenity"="fast_food"](around:5000,35.1587,129.1604);nwr["amenity"="cafe"](around:5000,35.1587,129.1604););out center tags;';fetch('https://overpass-api.de/api/interpreter?data='+encodeURIComponent(query)).then(r=>r.json()).then(data=>{const known=new Set(realHaeundaeStores.map(s=>s[0]));const extra=data.elements.filter(x=>x.tags?.name&&!known.has(x.tags.name)).slice(0,45);list.insertAdjacentHTML('beforeend',extra.map(x=>{const name=x.tags.name.replace(/</g,'&lt;');const kind=x.tags.cuisine||(x.tags.amenity==='cafe'?'카페':'음식점');return `<article class="place-card search-result-card"><div class="place-top"><h3>${name}</h3><span class="price-tag tag-적정">실제 장소</span></div><p>${kind} · 해운대 반경 5km</p><a class="place-map-link" target="_blank" rel="noopener" href="https://map.naver.com/p/search/${encodeURIComponent('해운대 '+x.tags.name)}">지도에서 보기 →</a></article>`;}).join(''));if(sub)sub.textContent=`해운대 인근 실제 매장 ${realHaeundaeStores.length+extra.length}곳`;}).catch(()=>{if(sub)sub.textContent=`대표 실제 매장 ${realHaeundaeStores.length}곳`;});};
initHomeStoreList();
