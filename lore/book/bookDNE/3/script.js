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
    .addScene('tell1:그녀는 모든 것을 시도했다. 위대한 브레이. 그들을 구원하겠다고 약속한 혈통. 그녀가 아무리 천재적이고 용감해도, 이건 그녀의 능력을 벗어난 일이었다.', 850)
    .addScene('tell1:아나의 지휘본부에서, 십여 개의 텅 빈 화면만 여기저기 남긴 채 라스푸틴은 죽어가고 있었다. 아나는 손가락 사이로 흘러내리는 코드의 피를 눈으로 볼 수 있는 것만 같았다.', 850)
    .addScene('tell1:자발라의 목소리가 들렸다.', 850)
    .addScene('tell1:하지만 먼 곳의 총성처럼 그녀의 머릿속 외진 곳으로 밀려나 의미 없이 희미할 뿐이었다.', 850)
    .addScene('tell1:피라미드의 왜곡 파장이 여전히 생생했다. 이건 공격이 아니었다. 명령이었다.', 850)
    .addScene('tell1:그들이 최선을 다해 준비한 계획을 느긋하게 묵살해 버린 것이다.', 850)
    .addScene('tell1:폭발은 없었다. 귀가 찢어질 듯한 사이렌도, 극적인 전기 불꽃도 없었다. 싸울 것도, 고칠 것도 없었다.', 850)
    .addScene('tell1:침묵에 잠긴 검은 유리 안에 갇혀 어쩔 줄 모르는 수호자가 하나 있을 뿐이었다.', 850)
    .addScene('tell1:그렇게 확신했었는데.', 850)
    .addScene('tell1:아나의 눈이 콘솔에서 콘솔로 빠르게 이동하는 진주를 추적했다. 그녀의 고스트는 각 콘솔에 여러 빛줄기를 연결하고 있었다.', 850)
    .addScene('tell1:"아나." 부담스러운 무게에 짓눌린 진주의 목소리는 잔뜩 왜곡되어 있었다. "찾은 것 같아요. 거의 다요. 하지만 시간이 별로 없어요."', 850)
    .addScene('tell1:그 목소리가 먼 곳의 총성을 꿰뚫고 귀에 꽂혔다. "뭐?" 아나의 처음 대답은 희미했다.', 850)
    .addScene('tell1:그 정보를 어떻게 받아들여야 할지 알 수 없었다. "뭐라고!?"', 850)
    .addScene('tell1:진주가 끙 소리를 내고는 화가 난 듯 속삭였다. "항쇄와… 엔그램이요…"', 850)
    .addScene('tell1:"아직 준비가 안 됐어."', 850)
    .addScene('tell1:"아나, 어서 해야 해요!"', 850)
    .addScene('tell1:"미쳐 버리고 말 거야! 난… 못해."', 850)
    .addScene('tell1:진주에게 연결된 빛줄기가 하나씩 끊어지기 시작했다. "지금이 아니면 안 돼요!"', 850)
    .addScene('tell1:그 말에 아나는 방을 가로질러 달렸다. 그녀가 공중에 명령을 그리자 바닥의 금고가 열렸다.', 850)
    .addScene('tell1:아나는 금고에서 12면체 상자를 꺼내 진주 앞에 내밀었다.', 850)
    .addScene('tell1:"진주, 어서 해!"', 850)
    .addScene('tell1:고스트의 의체가 변형되어 유도 구조물을 형성했고, 곧 핵에서 빛과 데이터가 쏟아져 나왔다.', 850)
    .addScene('tell1:순수한 정보의 줄기가 엔그램 안으로 쏟아져 들어가, 엔그램을 소용돌이치는 빛으로 가득 채웠다.', 850)
    .addScene('tell1:"된 건가…?"', 850)
    .addScene('tell1:"최선을 다했어요."', 850)
    .addScene('tell1:창문 밖으로, 저궤도 방어 위치에서 추락하는 전쟁위성들의 대기 마찰이 하늘에 기다란 불꽃을 남겼다.', 850)
    .addScene('tell1:멀리서 희미한 충격음이 들려왔다.', 850)