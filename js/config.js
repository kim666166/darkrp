/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/1.jpg",
	"backgrounds/images/2.jpg",
	"backgrounds/images/3.jpg",
	"backgrounds/images/4.jpg",
	"backgrounds/images/5.jpg",
	"backgrounds/images/6.jpg",
	"backgrounds/images/7.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "_3tIkwvUjJg", name: "Ailee(에일리) - If You"},
	{youtube: "MDu3xf884FQ", name: "우주를 줄게 - 볼빨간사춘기 "},
	{youtube: "_tjznmbULIY", name: "츠케맨 TSUKEMEN - 신림(神林) "},
	{youtube: "MtWQhmF3-NM", name: "임창정 - 내가 저지른 사랑"},
	{youtube: "Uhtp99HOuDE", name: "한동근 - 이 소설의 끝을 다시 써보려 해 "},
	{youtube: "XZqoLX8Gq78", name: "구르미 그린 달빛(Moonlight Drawn by Clouds) (구르미 그린 달빛 OST) - 거미(Gummy) "},
	{youtube: "VvU2WqhG25o", name: "마음을 삼킨다 (구르미 그린 달빛 OST) - 산들 "},
	{youtube: "GPijmcjTfHM", name: "벤 Ben - My All (끝에서 두 번째 사랑 OST PART 6)"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 100;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"프리킬금지",
"처벌중도주 벤",
"어드한테징징대면벤",
"논알은처벌",
"프롭타기,프롭킬,프롭치기처벌" ,
"VIP 구매할수 있습니다 확인하세요", 
"거짓RP 불가능" ,
"무기 상인,의사는 사설그룹 불가",
"사설그룹은 성안 5명 성밖7명", 
"기지가 어디있는지 따라 달라집니다9번항목", 
"vip,어드민 권남확인시 처벌하게 스크린샷 찍어두세요", 
"서버터지면복구거의못해드립니다", 
"언데드킹은 성밖에서 프리킬 가능합니다 언데드는 언데드킹의 명령에따라가능합니다", 
"성안에서의 프리킬은 처벌입니다", 
"OOC욕설 처벌 ic 패드립 처벌", 
"마법사 흑마법사 프리킬 처벌", 
"motd 미숙지 처벌",
"어드민 비하 서버 비하 처벌",
"막장러 처벌", 
"motd 없는 법이라고 빼애애액하면 처벌", 
"motd 에 없는 법 만들면 처벌", 
"타섭발언킥", 
"사설그룹 인원 넘을시 처벌", 
"사설그룹 마법사 2명이상 처벌 (한명가능)", 
"신고는 @를 이용한 신고 ex)@A님이 프리킬했어요", 
"돈버리면 오류때문에 못먹어요 복구 못해드림 복구징징 motd 미숙지로 처벌", 
"신고 안받냐고 징징 처벌", 
"처벌중 프리킬 프리샷 탈출 처벌", 
"조련사 몬스터 소환징징 한번만 그이상처벌", 
"마녀사냥을 국왕이 할수있게 할수있습니다 마녀 사냥 시작시 마녀 프리킬 가능 뉴라무시 처벌", 
"마녀사냥 마녀 현상금은 왕이 걸어야함", 
"슈퍼어드민 이외의 자가 이벤트를 할시 처벌", 
"연합벤 목록 영벤한사람들은 다벤함", 
"언데드킹 성밖 3m 앞에서 프리킬가능", 
"친목좆목팸놀이금지", 
"성안의 언데드를 정부직 프리킬 가능", 
"어드가~했다 하는거 비하" 
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;