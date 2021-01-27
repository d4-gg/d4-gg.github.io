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
    .addScene('tell1:자발라는 잔 두 개를 내려놓았다. 그리고 아나의 얼굴을 바라보며 벨벳 같은 액체를 잔에 채웠다.', 850)
    .addScene('tell1:그녀의 두 눈은 자발라의 책상 위 나무 무늬에 초점을 맞추고 있었다.', 850)
    .addScene('tell1:주의력이 뛰어나지 않은 사람이라면 주위의 커다란 나무 캔버스와 뒤섞여 구분할 수 없을 부분이었다.', 850)
    .addScene('tell1:그들 뒤로 구름에 가린 여행자가 드리워 있었다. 하늘의 일부인 동시에 외따로 떨어진 존재이기도 했다.', 850)
    .addScene('tell1:"우리가 졌다니 믿을 수가 없어요." 그녀가 말했다.', 850)
    .addScene('tell1:"우린 지지 않았네." 자발라는 잔 하나를 아나 쪽으로 밀었다.', 850)
    .addScene('tell1:"전 얼어붙었어요. 아직도 우리가 뭘 건진 건지, 아니, 건지기는 한 건지도 몰라요." 그녀가 말했다.', 850)
    .addScene('tell1:"패배를 눈앞에 두고 행동하는 건 쉬운 일이 아니야. 우리는 항상 예상되는 미래를 가슴에 품고 있어야 하네."', 850)
    .addScene('tell1:아나는 자발라를 노려봤다. "우리가 하는 일 중에 쉬운 건 없어요.', 850)
    .addScene('tell1:그게 중요한 거 아닌가요? 이건 스트레스 테스트였어요. 전 꺾였고요."', 850)
    .addScene('tell1:"신념을 갖게, 아나. 그대를 보니 우리는 늘 과거의 실패가 남긴 의혹에 짓눌린다는 사실을 다시 떠올리게 되는군.', 850)
    .addScene('tell1:그대가 없었다면 이 도시는 잿더미가 되었을 거야. 그것도 몇 번이나 말이지."', 850)
    .addScene('tell1:아나는 유리잔을 들어 올렸다. 액체의 냄새를 맡고, 얼굴을 찌푸린 후, 잔을 다시 탁자에 내려 놓았다.', 850)
    .addScene('tell1:"당신은 절 믿어 주셨어요. 라스푸틴은 제 담당이었죠."', 850)
    .addScene('tell1:"그래. 지금도 마찬가지네. 미래에 수행해야 할 일이지." 자발라는 술을 들이켜며 말했다.', 850)
    .addScene('tell1:"지금은 새로운 일이 생겼네. 에리스에게 지원이 필요해."', 850)
    .addScene('tell1:"모든 게 끝난 건 아니라고 얘기해 주세요."', 850)
    .addScene('tell1:"케이드가 세상을 떠났을 때, 나는 선봉대의 균열이 필연적인 실패로 향하는 길이라 생각했었네.', 850)
    .addScene('tell1:하지만 여전히 그의 자리를 대신할 사람은 찾지 못했지. 나는 내가 너무 약하다고', 850)
    .addScene('tell1:그의… 독특한 관점이 균형을 찾아 주지 않으면 내가 모두를 이끌 수는 없다고 생각했네.', 850)
    .addScene('tell1:하지만 이제 와 생각해 보니, 그의 죽음도 영원한 선택지들 중 하나였던 것 같아."', 850)
    .addScene('tell1:"자발라, 전 그런 건—"', 850)
    .addScene('tell1:"안심하게. 그대에게 그 일을 맡기려는 건 아니니까.', 850)
    .addScene('tell1:혹시 그대가 케이드를 없앴고 우리가 지금껏 범인을 착각하고 있었던 건 아니겠지?"', 850)
    .addScene('tell1:"그랬다면, 절 용서해 주실 건가요?"', 850)
    .addScene('tell1:"이해는 해 줬겠지." 그는 웃으며 말했다. "전에 아이코라가 움직이는 물체는 계속 움직인다고 얘기한 적이 있었네.', 850)
    .addScene('tell1:늘 멋진 표현이라 생각했지만, 솔직히 실천하기에는 조금 어려운 일이라고 생각하네."', 850)
    .addScene('tell1:아나는 고개를 가로저었다. "그냥 물리학에서나 통하는 얘기죠."', 850)
    .addScene('tell1:"생명의 근본적인 양상이야." 자발라는 아나가 이 말을 곱씹으며 마음이 풀어지는 것을 보았다.', 850)
    .addScene('tell1:"어떻게든 주어진 발판을 딛고, 우리 앞에 놓인 땅을 최선을 다해 밟으면 되는 걸세."', 850)
    .addScene('tell1:아나는 고개를 끄덕였다. "케이드의 닭은 어떻게 됐죠?"', 850)
    .addScene('tell1:자발라는 한숨을 쉬었다. "세인트가 그걸 비둘기 군주인가 뭔가로 임명한 것 같아."', 850)
    .addScene('tell1:아나의 굳게 다문 입이 희미한 미소로 녹아내렸다.', 850)
    .addScene('tell1:"우리가 아무리 오랜 시간을 살아간다고 해도, 삶은 우리를 기다려 주지 않아.', 850)
    .addScene('tell1:마시게." 자발라는 잔을 얼굴 앞으로 들어 올리며 쿡쿡 웃었다.', 850)
    .addScene('tell1:"비둘기의 군주가 우릴 소환해서 피라미드를 공격하라고 하기 전에 말이야."', 850)
  