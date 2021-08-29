var arr = "2021-03-29 00:07:00".split(/[- :]/);
var arr1 = "2014-07-25 12:00:00".split(/[- :]/);
var box = document.getElementsByClassName('textCon')[0];
var mask = document.getElementsByClassName('mask')[0];
var question = document.getElementsByClassName('question');
var confirm = document.getElementsByClassName('confirm')[0];
var personImg = document.getElementsByClassName('person')[0];
var myaudio = document.getElementById('myaudio');
function init() {
    var width = box.offsetWidth;
    var count = parseInt(width / 50 * 5);
    for (var i = 0; i < count; i++) {
        var size = parseInt(ran(60, 120) / 10);
        var ele = document.createElement('div');
        ele.classList.add('item');
        ele.style.width = size + 'px';
        ele.style.height = size + 'px';
        ele.style.left = ran(0, 95) + '%';
        ele.style.top = ran(20, 80) + '%';
        ele.style.animationDelay = ran(0, 30) / 10 + 's';
        box.appendChild(ele);
    }
}
function ran(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function timer_start(){

    var start_time = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
    // var start_time =  new Date(beginTime);
    // var start_time = Date.parse(beginTime);
    var duration = parseInt(new Date()- start_time)/1000;
    var seconds = parseInt( duration % 60);
    if (seconds < 10)
        seconds = "0" + seconds;
    duration = parseInt(duration / 60);
    var minutes = duration % 60;
    if (minutes < 10)
        minutes = "0" + minutes;
    duration = parseInt(duration / 60);
    var hours = duration % 24;
    if (hours < 10)
        hours = "0" + hours;
    duration = parseInt(duration / 24);
    var days = duration;
    document.getElementsByClassName('days-number')[0].innerHTML = ("" +days);
    document.getElementsByClassName('seconds')[0].innerHTML = (hours + " 时 " + minutes + " 分 " + seconds + " 秒");
}
function timer_start1(){

  var start_time1 = new Date(arr1[0], arr1[1]-1, arr1[2], arr1[3], arr1[4], arr1[5])
  // var start_time =  new Date(beginTime);
  // var start_time = Date.parse(beginTime);
  var duration = parseInt(new Date()- start_time1)/1000;
  var seconds = parseInt( duration % 60);
  if (seconds < 10)
      seconds = "0" + seconds;
  duration = parseInt(duration / 60);
  var minutes = duration % 60;
  if (minutes < 10)
      minutes = "0" + minutes;
  duration = parseInt(duration / 60);
  var hours = duration % 24;
  if (hours < 10)
      hours = "0" + hours;
  duration = parseInt(duration / 24);
  var days = duration;
  document.getElementsByClassName('days-number1')[0].innerHTML = ("" +days);
  document.getElementsByClassName('seconds1')[0].innerHTML = (hours + " 时 " + minutes + " 分 " + seconds + " 秒");
}
function prient() {
  var divNode = document.getElementsByClassName('content')[0];
	var codingStr = "七年前的七月份，我跟你进了同一个班级，开始我有看到你，但并未对你动心，慢慢发现你是一个特别努力上进的女生，每天去教室很早，也很安静（主要长得还很好看），就这样，我慢慢的开始留意你，每天上学的路上，总会在人流中留意你的身影，渴望与你相遇，期望走在你后面，静静地享受那份只有自己知道的美好，有时我会先去教室，然后在教室等着你去，你从进教室到座位的那一点点时间内，能正面看到你，我的内心真的是超级兴奋，我一直静静的享受着那份美好，直到有一天终于忍不住了，找到你的qq然后鼓足勇气添加好友，加好友简单聊了几次之后，我就鼓足勇气跟你表达了爱意，收到的回复是你不想谈恋爱，然而我还是没有放弃，我从你qq信息中得知你的生日后，就偷偷准备生日礼物，第一次那么认真的琢磨女孩子礼物，终于等到了你的生日，那一天的中午我没午睡，等别人睡着后，我偷偷去阳台写好了卡片，放在了礼物盒中，拿着礼物飞奔教室，激动的将精心准备的礼物放在你的课桌里，不小心在你的课桌上将自己的手划了一个口子，放完礼物的我就静静的等待你的到来，等你去教室之后，我是想看又不敢看你的反应，我以为你知道我是谁，然而后来才知道你那会儿并不知道我是谁，内心还是有点失望的，期间我了解到有另外一个男生也喜欢你，刚开始你好像没有太在意那个男生，让我没想到的是你们很快就好上了，在看到你们在一起的那一瞬间，我内心是满满的嫉妒与失望，真的很难过，然而我也无法改变，就那样，这件事开始影响着我的情绪，我试图躲避，试图转移注意力，但一时半会始终是没能调整过来，那段时间的感觉真的糟糕透了，终于熬到高考结束，终于可以不用每天面对着那样的场景了，接着是高考成绩的公布，我的成绩并不理想，我让关注我的亲人好友失望了，但他们并没有责怪我，更糟糕的是填报志愿由于没有服从调剂导致没有被学校录取，接着是走补录，补录真的是没得选，都是一些不怎么好的学校，无奈之下选了一个并不想去的学校，在高考后的一段日子我也跟你聊过一次天，问了问你的情况，接着就开启了大学生活，过节日的时候偶尔会问候一句，基本都是两三句就结束，直到18年的时候，偶然的一次节日问候中，多聊了几句，那次的聊天我真的很开心，是你第一次跟我聊那么久，从那之后我基本每个节日都会送节日祝福，期待的就是借着祝福的机会跟你聊天，每次跟你的聊天我都是全神贯注，聚精会神，好几次坐过了站，在19年春节，你主动提出了让我做你的闺蜜，我内心很清楚这意味着什么，我好像又没机会了，然而还是笑着答应你了，从那之后我就只说闺蜜该说的话，做闺蜜该做的事，没有在提到过对你的任何爱意，在努力克制自己，但还是会时不时打听你有没有遇到合适的人，直到19年毕业季，终于有机会见一面了，见面细节之前聊天已经说过好几次了，这里就不说了，那天你好像有心事，回去的那晚你问了我关于前男友找复合的看法，我才知道你的心事应该是前男友回来找你了，你内心在纠结，我一直在假装镇定，因为我很清楚我的身份是什么，第二天是儿童节，看别人在过节，我也没忍住约你出来吃个饭再回学校，那天见完之后回到家我真的是忍不住了，对你再次表达爱意，但你还是委婉拒绝了，我也不得不接受这个事实，第二天后调整状态还是回到闺蜜的身份，在此之后就一直保持着联系，我不敢频繁跟你聊天，我怕我控制不好自己，在19年低，你的生活中大概是有更加合适的人出现了，几次的聊天中对我略显冷漠，尽管内心真的很失落，但我在说服自己，这是必然的结果，我也更加克制自己了，20年说话相对很少，说话基本都是简单的节日问候，但内心依然在偷偷关注着你，在21年初，你问了一些问题后说自己是时候恋爱了，其实我内心很明白，但当你亲口说出来的时候我还是没能控制好自己的情绪，那天跟你聊了挺多，聊到了之前的一些事情。接着就是今年三月份，你说可以接受做我女朋友，我当时又惊又喜又纠结，担心你只是一时冲动，感觉你并不会喜欢我，但我还是愿意尝试，愿意把握走进你生活的机会，那天起，我感觉电脑键盘的颜色都变得五彩缤纷了，接下来的几个月发生的事情，你应该也记得，我确实有好几次惹你生气，惹你不开心，有时表达方式让你讨厌，我也在反思，可能真的是我想要得到的比之前多了，才会惹你生气，有时会想你想的烦躁，有时会嫉妒之前跟你在一起的男生，无论如何，真的是发自内心的在乎你，所有值得分享的瞬间，我想到的都是你，有时也会疑问我到底能不能给你想要的生活，真的怕自己让你失望，我也讨厌自己这么强的占有欲，但我觉得我真的改不了，也希望你不要跟我一般计较，过分矫情的话就不多说了，你迟到了很多年，可我依然为你的到来高兴，能给你的东西实在不多，我只想把这辈子最单纯的喜欢和数不尽的温柔都给你，你说我想的很多，但是这一切，都与你有关，想和你看最美的风景，想和你吃喜欢的美食，看什么吃什么不重要，重要的是和你，想给你我的一切，也想要得到你的一切，请相信，我一直在你身边，永远永远爱你♥️。<a href='./baby.html'>点击看烟花</a>";
	var j = 0;
	var coding = setInterval(function(){
		divNode.innerHTML = codingStr.slice(0,j) + '_';
		j++;
		if(j > codingStr.length){
			divNode.innerHTML = codingStr.slice(0,j);
			clearInterval(coding);
		}
	},10)
}
confirm.onclick=function(){
  console.log('question', question);
  if (!question[0].value) {
    alert('亲，请输入您的名字哦～');
    return;
  }
  if (question[0].value != "白云") {
    alert('亲，您的名字输入错误，请重新输入');
    return;
  }
  if (!question[1].value) {
    alert('亲，请输入最喜欢你的人的名字哦～');
    return;
  }
  if (question[1].value != "马瑞鹏") {
    alert('亲，名字错误，请重新输入，您是不是有想法💔～');
    return;
  }
  if (!question[2].value) {
    alert('亲，请回答问题，他对你好不好？');
    return;
  }
  if (question[2].value != "好") {
    alert('亲，请您在认真思考一下，他对你好不好～');
    return;
  }
  if (!question[3].value) {
    alert('亲，请回答问题，你会喜欢他吗？');
    return;
  }
  if (question[3].value != "会") {
    alert('亲，看到您的答案我很失望💔，请重新回答');
    return;
  }
  mask.style.display = "none";
  myaudio.play();
  setTimeout(function() {
    prient();
  }, 2500);
}
window.setInterval(timer_start,1000);
window.setInterval(timer_start1,1000);
timer_start();
timer_start1();
init();