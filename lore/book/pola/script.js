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
    .addScene('tell1:"내 예전 삶이나 가족에 대한 기억이 거의 없어. 하지만 소총을 쥐고 있으면 모든 게 제자리에 있는 느낌이야. 마치… 고향에 돌아온 것 같이."', 850)
  .addScene('tell1:아나 브레이', 850)
  .addScene('tell1:보통 사람이라면 망가진 무기를 생일 선물로 생각하진 않을 것이다.', 850)
  .addScene('tell1:하지만 브레이가 사람들은… 보통 사람과는 다르다.', 85)
  .addScene('tell1:물론 그들은 내가 영리하다고 하지만, 내가 범접하긴 어려운 뭔가 말로 표현할 수 없는 정도의', 850)
  .addScene('tell1:친밀한 관계를 도구나 기계와 형성하는 게 바로 브레이가 사람들이다.', 850)
  .addScene('tell1:그들이 그런 일에 날 끌어들일 만큼 날 믿을 거라곤 상상도 못했다. 오늘까진 말이다.', 850)
  .addScene('tell1:엘시는 내가 실험실에서 비밀리에 정찰 소총의 완벽성을 높이는 실험을 해온 사실을 안다.', 850)
  .addScene('tell1:난 엘시가 화를 낼 줄 알았다.', 850)
  .addScene('tell1:이런 무기는 브레이가의 프로젝트라 나 같은 입양된 아이가 건드릴 순 없는 것이었으니까.', 850)
  .addScene('tell1:그런데 오늘 아침 엘시는 날 놀라게 했다. 미소를 지으며 그 무기를 내게 건넨 것이다.', 850)
  .addScene('tell1:엘시는 자신이 그 무기를 직접 살펴봤지만 완성할 수 있는 건 나밖에 없다고 했다.', 850)
  .addScene('tell1:진짜 브레이테크 작품이라니.', 850)
  .addScene('tell1:게다가 그게 내 작품이고. 드디어 내가 속할 곳을 찾은 기분이다.', 850)
  .addScene('tell1:브레이가 사람들은 단순한 과학자가 아니다.', 850)
  .addScene('tell1:내 가족이다.', 850)