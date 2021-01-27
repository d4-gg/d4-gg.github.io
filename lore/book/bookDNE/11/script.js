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
    .addScene('tell1:아나 브레이는 수호자의 참새가 헬라스 분지를 마지막으로 쏜살같이 가로지르는 모습을 지켜봤다. ', 850)
    .addScene('tell1:아무도 그녀를 믿지 않았을 때에도 꿋꿋이 그녀를 믿어 준 친구의 모습이었다.', 850)
    .addScene('tell1:그런 믿음이야말로 행성계의 모든 전쟁지능 무기보다 강한 결속이라고, 자발라는 말했다. ', 850)
    .addScene('tell1:그건 앞으로 계속 나아가겠다는 약속이자, 아직 미래가 남아 있다는 합의였다.', 850)
    .addScene('tell1:진주는 "역전된 회수"라고 불렀다. 그녀는 과거의 잔해로부터 의미를 일궈내는 데 일가견이 있었다.', 850)
    .addScene('tell1:건물은 거의 비어 있었다. 그녀는 처분할 수 있는 기술은 전부 탑으로 보냈다.', 850)
    .addScene('tell1:화물선 한 척을 가득 채울 수 있는 분량이었다.', 850)
    .addScene('tell1:아나는 침묵에 잠긴 전쟁위성 대포를 내려다보는 커다란 유리창을 향해 돌아섰다. ', 850)
    .addScene('tell1:기갑단은 없었다. 화성에 묻힌 죽음도 조용해졌다. ', 850)
    .addScene('tell1:만일의 상황에 대비해서 원격에서 제어하는 발키리 서브루틴은 계속 작동시켜 두었다.', 850)
    .addScene('tell1:진주가 도약선을 마지막으로 점검했다.', 850)
    .addScene('tell1:검은 피라미드가 머리 위를 가득 채웠다. ', 850)
    .addScene('tell1:실험적 엑소 신체가 우주선 화물실에 실려 있었다. ', 850)
    .addScene('tell1:한 번에 한 걸음씩, 앞으로 나아가면 된다.', 850)