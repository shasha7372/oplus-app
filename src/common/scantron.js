/**
 * Created by songzx11469 on 2017/3/7.
 */
import $ from 'jquery'

(function ($) {
  $.fn.scantron = function (settings) {
    var defaults = {
      questions: null,
      fadeTime: 100,
      startImg: '/static/img/arrow.png',
      endText: '已结束',
      shortURL: null,
      sendResultsURL: null,
      resultComments: {
        perfect: '低风险',
        excellent: '低风险',
        good: '低风险',
        average: '中度风险',
        bad: '高风险',
        poor: '高风险',
        worst: '高风险'
      }
    }
    var config = $.extend(defaults, settings)
    if (config.questions === null) {
      $(this).html('<div class="intro-container slide-container"><h2 class="qTitle">Failed to parse questions.</h2></div>')
      return
    }
    var superContainer = $(this)
    var answers = []
    var introFob = '<div class="intro-container slide-container"><a class="nav-start" href="#">请认真完成风险测评试题<br/><br/><span><img src="' + config.startImg + '"></span></a></div>'
    var exitFob = '<div class="results-container slide-container"><div class="question-number">' + config.endText + '</div><div class="result-keeper"></div></div><div class="notice">请选择一个选项！</div><div class="progress-keeper" ><div class="progress"></div></div>'
    var contentFob = ''
    var questionsIteratorIndex
    var answersIteratorIndex
    superContainer.addClass('main-quiz-holder')
    for (questionsIteratorIndex = 0; questionsIteratorIndex < config.questions.length; questionsIteratorIndex++) {
      contentFob += '<div class="slide-container"><div class="question-number">' + (questionsIteratorIndex + 1) + '/' + config.questions.length + '</div><div class="question">' + config.questions[questionsIteratorIndex].question + '</div><ul class="answers">'
      for (answersIteratorIndex = 0; answersIteratorIndex < config.questions[questionsIteratorIndex].answers.length; answersIteratorIndex++) {
        contentFob += '<li>' + config.questions[questionsIteratorIndex].answers[answersIteratorIndex] + '</li>'
      }
      contentFob += '</ul><div class="nav-container">'
      if (questionsIteratorIndex !== 0) {
        contentFob += '<div class="prev"><a class="nav-previous" href="#">上一题</a></div>'
      }
      if (questionsIteratorIndex < config.questions.length - 1) {
        contentFob += '<div class="next"><a class="nav-next" href="#">下一题</a></div>'
      } else {
        contentFob += '<div class="next final"><a class="nav-show-result" href="#">完成</a></div>'
      }
      contentFob += '</div></div>'
      answers.push(config.questions[questionsIteratorIndex].correctAnswer)
    }
    superContainer.html(introFob + contentFob + exitFob)
    var progress = superContainer.find('.progress')
    var progressKeeper = superContainer.find('.progress-keeper')
    var notice = superContainer.find('.notice')
    var next = superContainer.find('.next')
    var progressWidth = progressKeeper.width()
    var userAnswers = []
    var questionLength = config.questions.length
    var slidesList = superContainer.find('.slide-container')

    function checkAnswers () {
      var resultArr = []
      var flag = false
      for (let i = 0; i < answers.length; i++) {
        if (answers[i] === userAnswers[i]) {
          flag = true
        } else {
          flag = false
        }
        resultArr.push(flag)
      }
      return resultArr
    }

    function roundReloaded (num, dec) {
      var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)
      return result
    }

    function judgeSkills (score) {
      if (score === 100) return config.resultComments.perfect
      else if (score > 90) return config.resultComments.excellent
      else if (score > 70) return config.resultComments.good
      else if (score > 50) return config.resultComments.average
      else if (score > 35) return config.resultComments.bad
      else if (score > 20) return config.resultComments.poor
      else return config.resultComments.worst
    }

    progressKeeper.hide()
    notice.hide()
    slidesList.hide().first().fadeIn(config.fadeTime)
    superContainer.find('li').click(function () {
      var thisLi = $(this)
      if (thisLi.hasClass('selected')) {
        thisLi.removeClass('selected')
      } else {
        thisLi.parents('.answers').children('li').removeClass('selected')
        thisLi.addClass('selected')
      }
      next.show()
      notice.hide()
    })
    superContainer.find('.nav-start').click(function () {
      $(this).parents('.slide-container').fadeOut(config.fadeTime,
        function () {
          $(this).next().fadeIn(config.fadeTime)
          progressKeeper.fadeIn(config.fadeTime)
        })
      return false
    })
    superContainer.find('.next').click(function () {
      if ($(this).parents('.slide-container').find('li.selected').length === 0) {
        next.hide()
        notice.fadeIn(config.fadeTime)
        return false
      }
      notice.hide()
      $(this).parents('.slide-container').fadeOut(config.fadeTime,
        function () {
          $(this).next().fadeIn(config.fadeTime)
        })
      progress.animate({width: progress.width() + Math.round(progressWidth / questionLength)},
        500)
      return false
    })
    superContainer.find('.prev').click(function () {
      next.show()
      notice.hide()
      $(this).parents('.slide-container').fadeOut(config.fadeTime,
        function () {
          $(this).prev().fadeIn(config.fadeTime)
        })
      progress.animate({width: progress.width() - Math.round(progressWidth / questionLength)},
        500)
      return false
    })
    superContainer.find('.final').click(function () {
      if ($(this).parents('.slide-container').find('li.selected').length === 0) {
        notice.fadeIn(config.fadeTime)
        return false
      }
      superContainer.find('li.selected').each(function (index) {
        userAnswers.push($(this).parents('.answers').children('li').index($(this).parents('.answers').find('li.selected')) + 1)
      })
      if (config.sendResultsURL !== null) {
        var collate = []
        for (let r = 0; r < userAnswers.length; r++) {
          collate.push('{"questionNumber":"' + parseInt(r + 1, 10) + '", "userAnswer":"' + userAnswers[r] + '"}')
        }
        $.ajax({
          type: 'POST',
          url: config.sendResultsURL,
          data: '{"answers": [' + collate.join(',') + ']}',
          complete: function () {
            console.log('OH HAI')
          }
        })
      }
      progressKeeper.hide()
      var results = checkAnswers()
      var trueCount = 0
      var shareButton = ''
      var score
      var resultSet = ''
      if (config.shortURL === null) {
        config.shortURL = window.location
      }
      for (var i = 0, toLoopTill = results.length; i < toLoopTill; i++) {
        if (results[i] === true) {
          trueCount++
        }
        resultSet += '<div class="result-row">' + (results[i] === true ? '<div class="correct">#' + (i + 1) + '<span></span></div>' : '<div class="wrong">#' + (i + 1) + '<span></span></div>')
        resultSet += '<div class="resultsview-qhover">' + config.questions[i].question
        resultSet += '<ul>'
        for (answersIteratorIndex = 0; answersIteratorIndex < config.questions[i].answers.length; answersIteratorIndex++) {
          var classestoAdd = ''
          if (config.questions[i].correctAnswer === answersIteratorIndex + 1) {
            classestoAdd += 'right'
          }
          if (userAnswers[i] === answersIteratorIndex + 1) {
            classestoAdd += ' selected'
          }
          resultSet += '<li class="' + classestoAdd + '">' + config.questions[i].answers[answersIteratorIndex] + '</li>'
        }
        resultSet += '</ul></div></div>'
      }
      score = roundReloaded(trueCount / questionLength * 100, 2)

      resultSet = '<h2 class="qTitle">您的等级<br/><b class="risk-level">' + judgeSkills(score) + '</b></h2>' + shareButton + '<div class="jquizzy-clear"></div>' + resultSet + '<div class="jquizzy-clear"></div>'
      superContainer.find('.result-keeper').html(resultSet).show(500)
      superContainer.find('.resultsview-qhover').hide()
      superContainer.find('.result-row').hover(function () {
        $(this).find('.resultsview-qhover').show()
      },
      function () {
        $(this).find('.resultsview-qhover').hide()
      })
      $(this).parents('.slide-container').fadeOut(config.fadeTime,
        function () {
          $(this).next().fadeIn(config.fadeTime)
        })
      return false
    })
  }
})($)
