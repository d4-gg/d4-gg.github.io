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
    .addScene('tell1:애셔 미르는 끊임없이 투덜거리며 이오를 가로질렀다.', 850)
    .addScene('tell1:바위투성이 노두를 건너며 그는 발아래 땅이 무르다고, 배낭이 너무 크다고,', 850)
    .addScene('tell1:어슬렁거리는 굴복자가 성가시다고, 실리콘 신경종 총에 눌린 어깨가 아프다고 투덜거렸다.', 850)
    .addScene('tell1:그는 더러운 에너지를 요람에 쏟아붓고 있는 피라미드를 올려다보며 냉소적인 미소를 떠올렸다.', 850)
    .addScene('tell1:아무리 박식한 그라도 이런 광경에 어울릴 말을 엮어 내기는 쉽지 않았다.', 850)
    .addScene('tell1:지금은 이오에서 밤으로 통칭되는 시간의 말미였고, 애셔는 많이 피곤했지만 쉬지 않고 걸었다.', 850)
    .addScene('tell1:껍질에서 검은 수정 오벨리스크 무더기가 형성되고 있는 달팽이를 살펴보려고 단 한 번, 아주 잠깐 멈춰 섰을 뿐이다.', 850)
    .addScene('tell1:그는 요람 아래의 동굴 같은 공간으로 들어섰다. 토양으로 이루어진 벽에서 낯선 뿌리가 튀어나와 있었다.', 850)
    .addScene('tell1:그는 꿈틀거리는 비명자의 패턴을 침착하게 관찰한 후, 신중하게 계산된 도탄으로 굴복자 한 무리를 엉뚱한 길로 쫓아 보냈다.', 850)
    .addScene('tell1:그는 아무런 방해도 받지 않고 그곳을 통과했다.', 850)
    .addScene('tell1:에리스는 거대한 나무의 뒤틀린 뿌리 근처 엉성한 야영지에 있었다.', 850)
    .addScene('tell1:그녀는 아주 먼 위쪽으로부터 내리쬐어 나무 사이를 통과한 후', 850)
    .addScene('tell1:바닥에 묘한 형성층의 꽃잎을 그리고 있는 빛줄기 곁에 무릎을 꿇고 앉아 있었다.', 850)
    .addScene('tell1:애셔는 수액과 가열한 조리용 기름 냄새를 맡았다.', 850)
    .addScene('tell1:그녀는 일단 반갑다고 말하긴 했다. 하지만 갑작스럽게 보급품을 갖고 찾아온 이유가 뭐냐고 묻는 걸 보면,', 850)
    .addScene('tell1:아무래도 예상치 못한 방문이 방해가 되는 것 같았다.', 850)
    .addScene('tell1:애셔가 짐을 풀고 가져온 것을 꺼내는 사이, 에리스는 나무와 메시지, 속삭임에 대해 설명했다.', 850)
    .addScene('tell1:알 수 없는 존재의 얼굴을 엿보는 험난한 과정이 얼마나 짜릿하고 즐거운지 이야기했다.', 850)
    .addScene('tell1:그 미지의 존재가 자기를 죽이려 할지도 모른다는 사실은 안중에도 없는 것 같았다. 그녀는 웃으며 말을 이었다.', 850)
    .addScene('tell1:애셔도 그녀의 생각을 이해할 수 있을 것 같았다.', 850)
    .addScene('tell1:애셔는 불가에서 쉬었다.', 850)
    .addScene('tell1:근처에 있는 작은 탁자에는 군체 키틴질 표본과 나무에서 잘라낸 조각, 잿빛 흙과 함께 공책 하나가 펼쳐져 있었다.', 850)
    .addScene('tell1:공책을 들여다본 애셔는 그 안의 내용이 개인적인 기록이라는 걸 깨닫고는 황급히 덮어 버렸다.', 850)
    .addScene('tell1:그는 다시 가방 안으로 손을 뻗었다. 그리고 아주 좋은 황금색 술이 들어 있는 병을 꺼내 탁자 위에 올려놓았다.', 850)
    .addScene('tell1:예전에 한 덩치 큰 무식쟁이가 그가 부탁한 이소프로필 알코올 대신 가져온 물건이었다.', 850)
    .addScene('tell1:그는 눈금 실린더가 담겨 있던 커다란 배송 상자 안에 깨끗한 잔 두 개를 담아서 가져왔다.', 850)
    .addScene('tell1:하지만 잔은 그냥 하나만 꺼내서 병 옆에 슬며시 놓았다.', 850)
    .addScene('tell1:애셔는 콜록 기침을 하고 신발 끈을 다시 맨 후 일어서서 배낭을 짊어졌다.', 850)
    .addScene('tell1:"알아서 잘 처리하고 있겠지?" 그가 에리스에게 물었다.', 850)
    .addScene('tell1:"물론." 그녀는 휘도는 빛줄기를 뚫어져라 바라보며 말했다.', 850)
    .addScene('tell1:그는 불편한 듯 몸을 움직이다가 희미하게 헛기침을 했다.', 850)
    .addScene('tell1:"뭘 잘 처리하고 있는지 알아야겠는데." 그가 다시 한번 말했다.', 850)
    .addScene('tell1:에리스는 고개를 돌려 건너편에 서 있는 사람을 가만히 바라봤다. "최선을 다하고 있어." 그리고 이렇게만 말했다.', 850)
    .addScene('tell1:애셔는 고개를 끄덕이고는 다시 먼 길을 돌아가기 시작했다.', 850)
  