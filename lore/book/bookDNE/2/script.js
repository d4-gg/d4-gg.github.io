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
    .addScene('tell1:부사령관 슬론의 눈에 과적 상태의 선봉대 소형선이 파도 가까이 내려앉는 모습이 보였다.', 850)
    .addScene('tell1:"조심해!" 그녀가 통신 장치에 대고 소리치자 함선은 정상 궤도에 올랐다.', 850)
    .addScene('tell1:"그 아래에 있는 건 액화 메탄이고, 거기에 죽지 않으면 리바이어던에게 죽을 거다."', 850)
    .addScene('tell1:"이거 왜 이래요. 리바이어던 같은 건 없어요." 지직거리는 잡음과 함께 조종사 목소리가 들렸다. 17살도 안 되어 보이는 도시에서 온 꼬마였다.', 850)
    .addScene('tell1:"그리고 저게 메탄이라면 왜 헬멧도 안 쓰고 있는 겁니까?"', 850)
    .addScene('tell1:슬론은 히죽 웃었다. 이렇게 무례한 말대꾸는 낯선 경험이었다. "난 보습을 열심히 하고 있거든, 이 애송아."', 850)
    .addScene('tell1:슬론은 그렇게 말하고 통신을 끊었다.', 850)
    .addScene('tell1:몰락자 범선이 굉음을 내며 머리 위를 지나갔고, 슬론은 한달음에 시추 설비 외부의 통로로 나왔다.', 850)
    .addScene('tell1:그녀는 갑판에서 일하는 부하들에게 화물이 없는 곳으로 피하라고 외친 후 정찰 소총을 꺼내고 한쪽 무릎을 꿇었다.', 850)
    .addScene('tell1:처음으로 나타난 드렉 몇 명은 땅에 내려서기도 전에 죽었다. 하지만 몰아치는 해풍에 다음 사격은 크게 빗나갔다.', 850)
    .addScene('tell1:그녀는 상륙 부대가 부하들이 아니라 화물 왕복선을 노릴 거라고 생각했고, 그대로 몸을 돌려 왕복선 쪽으로 시야를 확보했지만, 적들은 보급품을 향해 돌진했다.', 850)
    .addScene('tell1:그녀는 투덜거리며 난간을 뛰어넘었고, 내리치는 번개처럼 착지했다. 이어폰에서 소리가 들려왔다.', 850)
    .addScene('tell1:"사이렌의 감시, 보급선 비엔나 스팅어에서 착륙 장소를 찾고 있다."', 850)
    .addScene('tell1:"남쪽 5번 착륙장!" 그녀는 우렁찬 소총 발사음 사이로 외쳤다. "가져온 걸 전부 내려놔. 곧바로 보급 팀을 그쪽으로 보내겠다."', 850)
    .addScene('tell1:그녀는 드렉 두 명에게 추가로 총알을 박아 넣었고, 범선의 굉음은 웅웅거리는 소음으로 바뀌었다.', 850)
    .addScene('tell1:멀어지는 범선에서 건성으로 발사한 와이어 소총 사격이 착륙장에 꽂혔다.', 850)
    .addScene('tell1:슬론이 큰 소리로 팀을 호출했다. 사상자는 없었고, 새로 받은 보급품 상자 두 개를 제외하면 빼앗긴 것도 없었다.', 850)
    .addScene('tell1:그녀는 착륙장 옆에 있는 팀에 명령을 내리고 자기 자리로 돌아가는 긴 계단을 올라가기 시작했다.', 850)
    .addScene('tell1:그들은 도시로 실어 보낼 황금기 기술을 적재하는 도중에는 공격해 오지 않았다. 그들은 보급품을 쫓고 있었다. 여길 떠나는 길인 게 분명했다.', 850)
    .addScene('tell1:그녀는 하늘에 도사린 피라미드를 올려다보고는 눈살을 찌푸렸다.', 850)
    .addScene('tell1:집무실로 통하는 문이 닫히고 쉬잇 소리와 함께 잠겼다. 패널의 희미한 파란색 불빛이 문이 완전히 밀폐되었음을 알렸다.', 850)
    .addScene('tell1:슬론은 방을 가로질렀다. 그리고 시추 설비의 한쪽 벽에 뚫린 커다란 구멍 너머로 바다를 바라봤다.', 850)
  