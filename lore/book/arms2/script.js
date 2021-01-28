/*
 * TheaterJS, a typing effect mimicking human behavior.
 *
 * Github repository: 
 * https://github.com/Zhouzi/TheaterJS
 *
 */

var theater = theaterJS({ erase: 450})

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'tell1') {
      document.body.classList.add('dark')
    } else {
     document.body.classList.add('dark')
    }
  })

theater
  .addActor('tell1', { speed: 0.8,accuracy: 1 })
    .addScene('tell1:"여명은 모두를 반갑게 맞이하지." —에바 레반테', 850)
    .addScene('tell1:지난 삼 주 동안 그 수호자는 늘 참새들이 우글거리는 주요 도로에서 멀리 벗어난 곳에 놓인', 850)
    .addScene('tell1:잔뜩 녹이 슨 선적 컨테이너 안에서 생활했다.', 850)
    .addScene('tell1:그는 다른 수호자들이 오가는 길에서 벗어나 있었고, 그러지 못할 때는 헬멧을 썼다.', 850)
    .addScene('tell1:늘 그랬다.', 850)
    .addScene('tell1:그가 소유한 것이라고는 낡아빠진 장비와 반지, 비단 덮개 하나뿐이었다.', 850)
    .addScene('tell1:깨어났을 때 그가 지니고 있던 건 그게 전부였다.', 850)
    .addScene('tell1:반지는 사슬에 꿰어 목에 걸고, 비단 덮개는 떠오르지 않는 기억을 상기하고자 곁에 두었다.', 850)
    .addScene('tell1:가끔은 어깨에 걸쳐 늘어뜨리기도 했다.', 850)
    .addScene('tell1:섬세한 천으로 만든 그 덮개를 보며 그는 지금의 삶이 시작되기 전에 살아가던 장소를 상상했고', 850)
    .addScene('tell1:지금 이곳에 비해 거기는 얼마나 멋진 곳이었을까 생각했다.', 850)
    .addScene('tell1:그는 홀로 시간을 보냈다. 다른 수호자는 예측 불가능한 고통과 혼돈의 근원일 뿐이었고', 850)
    .addScene('tell1:그 또한 그를에게 그런 존재였다.', 850)
    .addScene('tell1:노골적인 적대감을 표시하는 이들도 있었다.', 850)
    .addScene('tell1:또 그를 볼 때마다 이유를 알 수 없는 개인적인 슬픔에 짓눌리는 자들도 있었다.', 850)
    .addScene('tell1:그는 아무것도 알지 못했다.', 850)
    .addScene('tell1:혼자 있는 편이 낫다는 것, 그것이 부활의 가장 고통스러운 교훈이었다.', 850)
    .addScene('tell1:그래서 그는 이제 늘 혼자였다. 그의 고스트만 제외하고.', 850)
    .addScene('tell1:어느 날 밤, 그는 무릎에 머리를 묻고 먼 곳에서 들려 오는 날카로운 총성에 귀를 기울였다', 850)
    .addScene('tell1:일주일 째 다른 사람은 아무도 보지 못했지만, 그 소리는 계속 들렸다.', 850)
    .addScene('tell1:그것 때문에 왠지 고독이 더 심해지는 것 같았다. 더 짙어지는 것만 같았다.', 850)
    .addScene('tell1:"혹시 그거 아세요?" 그의 총명하고 상냥한 고스트가 말했다.', 850)
    .addScene('tell1:보라색 의체가 상자 밖의 희미한 빛을 받아 반짝였다.', 850)
    .addScene('tell1:"최후의 도시에서는 지금 축제가 열리고 있어요.', 850)
    .addScene('tell1:여명이라고 하더라고요. 우정과 희망, 온기의 축제라고 해요."', 850)
    .addScene('tell1:수호자는 두 눈을 감고 씁쓸한 감정을 억지로 삼켰다.', 850)
    .addScene('tell1:둘 사이에 하지 않은 말들로 이루어진 무거운 침묵이 내려앉고, 고스트는 그의 어깨에 부드럽게 몸을 부딪쳤다.', 850)
    .addScene('tell1:"서로 기분이 좋아지라며 이렇게 인사를 한다고 하네요. 행복한 여명이 되길."', 850)
    .addScene('tell1:그래도 수호자는 아무 말도 하지 않았다. 자신의 침묵 때문에 속이 뒤틀려 왔다.', 850)
    .addScene('tell1:그의 고스트는 단 한 번도 그를 의심하지 않았다.', 850)
    .addScene('tell1:사실 어느 누구도 의심하지 않았다. 끝없는 낙관의 샘 같았다.', 850)
    .addScene('tell1:그건 짜증스러운 동시에 가슴 아프고, 위로와 안심이 되는 기분이기도 했다.', 850)
    .addScene('tell1:수호자도 고스트를 실망시키고 싶지는 않았다.', 850)
    .addScene('tell1:이 삶에서는 실망스러운 일이 이미 너무 많았으니까.', 850)
    .addScene('tell1:"행복한 여명이 되길." 그는 말했다.', 850)