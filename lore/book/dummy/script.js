

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
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)