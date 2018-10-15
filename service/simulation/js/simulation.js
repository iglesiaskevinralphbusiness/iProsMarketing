(function(){
  
  var searchData = {
    /*	pt : {
		'1a' : 1,
		'1b' : 1,
		'1c' : 1,
		'1d' : 1,
		'1e' : 1,
		'1f' : 1,
		'1g' : 1,
		'1h' : 1,
		'1i' : 1,
		'1j' : 1,
		'2a' : 0,
		'2b' : 1,
		'2c' : 1,
		'3a' : 0,
		'3b' : 0,
		'3c' : 0,
		'3d' : 0,
		'3e' : 0,
		'3f' : 0,
		'3g' : 0,
		'3h' : 0,
		'3i' : 0,
		'3j' : 1,
		'3k' : 1,
		'3l' : 1,
		'3m' : 1,
		'3n' : 0,
		'3o' : 0,
		'3p' : 0,
		'3q' : 0,
		'3r' : 0,
		'3s' : 1,
		'3t' : 1,
		'3u' : 1,
		'3v' : 1,
		'4a' : 1,
		'4b' : 1,
		'4c' : 1,
		'4d' : 1,
		'4e' : 1
	}, */
    gl : {
      '1a' : 1,
      '1b' : 1,
      '1c' : 1,
      '1d' : 1,
      '1e' : 1,
      '1f' : 1,
      '1g' : 1,
      '1h' : 1,
      '1i' : 1,
      '1j' : 1,
      '2a' : 0,
      '2b' : 1,
      '2c' : 1,
      '3a' : 0,
      '3b' : 0,
      '3c' : 0,
      '3d' : 0,
      '3e' : 0,
      '3f' : 0,
      '3g' : 1,
      '3h' : 1,
      '3i' : 1,
      '3j' : 1,
      '3k' : 1,
      '3l' : 1,
      '3m' : 1,
      '3n' : 0,
      '3o' : 0,
      '3p' : 1,
      '3q' : 1,
      '3r' : 1,
      '3s' : 1,
      '3t' : 1,
      '3u' : 1,
      '3v' : 1,
      '4a' : 0,
      '4b' : 0,
      '4c' : 1,
      '4d' : 1,
      '4e' : 1
    },
    /*	sv : {
		'1a' : 1,
		'1b' : 1,
		'1c' : 1,
		'1d' : 0,
		'1e' : 0,
		'1f' : 0,
		'1g' : 1,
		'1h' : 0,
		'1i' : 0,
		'1j' : 0,
		'2a' : 0,
		'2b' : 1,
		'2c' : 0,
		'3a' : 0,
		'3b' : 0,
		'3c' : 0,
		'3d' : 0,
		'3e' : 0,
		'3f' : 1,
		'3g' : 1,
		'3h' : 1,
		'3i' : 1,
		'3j' : 1,
		'3k' : 1,
		'3l' : 1,
		'3m' : 1,
		'3n' : 0,
		'3o' : 1,
		'3p' : 1,
		'3q' : 1,
		'3r' : 1,
		'3s' : 1,
		'3t' : 1,
		'3u' : 1,
		'3v' : 1,
		'4a' : 0,
		'4b' : 0,
		'4c' : 0,
		'4d' : 0,
		'4e' : 1
	}, */
    tu : {
      '1a' : 1,
      '1b' : 1,
      '1c' : 1,
      '1d' : 1,
      '1e' : 1,
      '1f' : 1,
      '1g' : 0,
      '1h' : 0,
      '1i' : 1,
      '1j' : 1,
      '2a' : 1,
      '2b' : 1,
      '2c' : 1,
      '3a' : 0,
      '3b' : 0,
      '3c' : 0,
      '3d' : 1,
      '3e' : 1,
      '3f' : 0,
      '3g' : 0,
      '3h' : 1,
      '3i' : 1,
      '3j' : 1,
      '3k' : 1,
      '3l' : 1,
      '3m' : 1,
      '3n' : 0,
      '3o' : 0,
      '3p' : 0,
      '3q' : 1,
      '3r' : 1,
      '3s' : 1,
      '3t' : 1,
      '3u' : 1,
      '3v' : 1,
      '4a' : 1,
      '4b' : 1,
      '4c' : 1,
      '4d' : 0,
      '4e' : 1
    },
    sp : {
      '1a' : 1,
      '1b' : 1,
      '1c' : 1,
      '1d' : 1,
      '1e' : 1,
      '1f' : 1,
      '1g' : 1,
      '1h' : 1,
      '1i' : 1,
      '1j' : 1,
      '2a' : 1,
      '2b' : 1,
      '2c' : 1,
      '3a' : 1,
      '3b' : 1,
      '3c' : 1,
      '3d' : 1,
      '3e' : 1,
      '3f' : 1,
      '3g' : 1,
      '3h' : 1,
      '3i' : 1,
      '3j' : 1,
      '3k' : 1,
      '3l' : 1,
      '3m' : 1,
      '3n' : 0,
      '3o' : 1,
      '3p' : 1,
      '3q' : 1,
      '3r' : 1,
      '3s' : 1,
      '3t' : 1,
      '3u' : 1,
      '3v' : 1,
      '4a' : 0,
      '4b' : 0,
      '4c' : 1,
      '4d' : 1,
      '4e' : 1
    },
    dt : {
      '1a' : 0,
      '1b' : 1,
      '1c' : 0,
      '1d' : 0,
      '1e' : 1,
      '1f' : 1,
      '1g' : 1,
      '1h' : 0,
      '1i' : 0,
      '1j' : 0,
      '2a' : 1,
      '2b' : 0,
      '2c' : 0,
      '3a' : 0,
      '3b' : 1,
      '3c' : 1,
      '3e' : 1,
      '3f' : 0,
      '3g' : 0,
      '3h' : 0,
      '3i' : 0,
      '3j' : 0,
      '3k' : 0,
      '3l' : 0,
      '3m' : 0,
      '3n' : 0,
      '3o' : 0,
      '3p' : 0,
      '3q' : 0,
      '3r' : 0,
      '3s' : 0,
      '3t' : 0,
      '3u' : 0,
      '3v' : 0,
      '4a' : 1,
      '4b' : 1,
      '4c' : 0,
      '4d' : 0,
      '4e' : 1
    },
    bt : {
      '1a' : 0,
      '1b' : 0,
      '1c' : 0,
      '1d' : 0,
      '1e' : 0,
      '1f' : 0,
      '1g' : 0,
      '1h' : 0,
      '1i' : 0,
      '1j' : 0,
      '2a' : 0,
      '2b' : 0,
      '2c' : 0,
      '3a' : 0,
      '3b' : 0,
      '3c' : 0,
      '3d' : 0,
      '3e' : 0,
      '3f' : 0,
      '3g' : 0,
      '3h' : 0,
      '3i' : 0,
      '3j' : 0,
      '3k' : 0,
      '3l' : 0,
      '3m' : 0,
      '3n' : 0,
      '3o' : 0,
      '3p' : 0,
      '3q' : 0,
      '3r' : 0,
      '3s' : 0,
      '3t' : 0,
      '3u' : 0,
      '3v' : 0,
      '4a' : 0,
      '4b' : 0,
      '4c' : 0,
      '4d' : 0,
      '4e' : 0
    },
    vn : {
      '1a' : 0,
      '1b' : 0,
      '1c' : 1,
      '1d' : 0,
      '1e' : 1,
      '1f' : 0,
      '1g' : 1,
      '1h' : 0,
      '1i' : 0,
      '1j' : 0,
      '2a' : 1,
      '2b' : 0,
      '2c' : 0,
      '3a' : 0,
      '3b' : 0,
      '3c' : 1,
      '3d' : 1,
      '3e' : 1,
      '3f' : 0,
      '3g' : 0,
      '3h' : 0,
      '3i' : 0,
      '3j' : 0,
      '3k' : 0,
      '3l' : 0,
      '3m' : 0,
      '3n' : 0,
      '3o' : 0,
      '3p' : 0,
      '3q' : 0,
      '3r' : 0,
      '3s' : 0,
      '3t' : 0,
      '3u' : 0,
      '3v' : 0,
      '4a' : 0,
      '4b' : 0,
      '4c' : 0,
      '4d' : 0,
      '4e' : 1
    },
    tv : {
      '1a' : 0,
      '1b' : 0,
      '1c' : 0,
      '1d' : 0,
      '1e' : 0,
      '1f' : 0,
      '1j' : 0,
      '1h' : 0,
      '1i' : 0,
      //'1j' : 0,
      '2a' : 0,
      '2b' : 0,
      '2c' : 0,
      '3a' : 0,
      '3b' : 0,
      '3c' : 0,
      '3d' : 0,
      '3e' : 0,
      '3f' : 0,
      '3g' : 0,
      '3h' : 0,
      '3i' : 0,
      '3j' : 0,
      '3k' : 0,
      '3l' : 0,
      '3m' : 0,
      '3n' : 0,
      '4a' : 0,
      '4b' : 0,
      '4c' : 0,
      '4d' : 0,
      '4e' : 0
    },
    mm : {
      '1a' : 0,
      '1b' : 0,
      '1c' : 0,
      '1d' : 0,
      '1e' : 0,
      '1f' : 0,
      '1g' : 0,
      '1h' : 0,
      '1i' : 0,
      '1j' : 0,
      '2a' : 0,
      '2b' : 0,
      '2c' : 0,
      '3a' : 0,
      '3b' : 0,
      '3c' : 0,
      '3d' : 0,
      '3e' : 0,
      '3f' : 0,
      '3g' : 0,
      '3h' : 0,
      '3i' : 0,
      '3j' : 0,
      '3k' : 0,
      '3l' : 0,
      '3m' : 0,
      '3n' : 0,
      '4a' : 0,
      '4b' : 0,
      '4c' : 0,
      '4d' : 0,
      '4e' : 0
    }
  };

  
  
  
  $(function(){
    //set data mapping for budget and parameter code
    var _data_map_budgetMinParam = {
      '30' : '3f',
      '50' : '3g',
      '100' : '3h',
      '150' : '3i',
      '200' : '3j',
      '250' : '3k',
      '300' : '3l',
      '500' : '3m'
    };
    var _data_map_budgetMaxParam = {
      '30' : '3n',
      '50' : '3o',
      '100' : '3p',
      '150' : '3q',
      '200' : '3r',
      '250' : '3s',
      '300' : '3t',
      '500' : '3u',
      '1000' : '3v'
    }
    
    var _view_select = $('#simSelect');
    var _view_steps = $('#simStep');
    var _view_step1 = $('#step1');
    var _view_step2 = $('#step2');
    var _view_step3 = $('#step3');
    var _views = $('.simflow')
    var _view_num_1 = $('#simflow1');
    var _view_num_2 = $('#simflow2');
    var _view_num_3_1 = $('#simflow3-1');
    var _view_num_3_2 = $('#simflow3-2');
    var _view_num_4 = $('#simResults');
    var _view_num_4_detail = $('#simResultsDetail');
    var _view_clear = $('#jsSimulation_clear');
    
    var savedPurposeString = '';
    var saveBudgetString = '';
    var saveSearchCondition = '';
    var saveOtherSelections = '';
    var saveResultString = '';
    

    var fadeSp =500;
    
    init();
    
    
    /**
     * 初期表示設定を行う
     */
    function init(){
      $('.JsError').hide();
      //initialize view
      _view_steps.show();
      _view_select.show();
      _view_num_1.show();
      _view_num_2.hide();
      _view_num_3_1.hide();
      _view_num_3_2.hide();
      _view_num_4.hide();
      
      //check cookie if the simulation has alreday activated
      if(!$.cookie('jsS_result')){
        clearCondition();
      }else{
        _view_num_1.hide();
//        _view_steps.hide();
        _view_select.hide();
        setSearchCondition();
        changeSearchCondition();
        updateLinks();
        _view_num_4.fadeIn();
        _view_num_4_detail.show();
        
        savedPurposeString = getPurpose();
        saveBudgetString = getBudget();
        saveSearchCondition = getTerm();
        
        saveOtherSelections = getOther();
        saveResultString = $.cookie('jsS_result');
        
      }
      $('input[name=q1Cheack]').each(function(){
        if($(this).prop('checked')){
          $(this).parents('li').addClass('selected');
        }
      });
      $('input[name=q2Cheack]').each(function(){
        if($(this).prop('checked')){
          $(this).parents('li').addClass('selected');
        }
      });
    }
    
    
    /**
     * 検索条件の初期化を行う
     */
    function clearCondition(){
      $.cookie('jsS_purpose','');
      $.cookie('jsS_term','');
      $.cookie('jsS_budget','');
      $.cookie('jsS_other','');
      $.cookie('jsS_result','');

      $('input[name=q1Cheack]').prop('checked', false);
      $('input[name=q2Cheack]').prop('checked', false);
      $('input[name=q3-1Cheack] option')
        .prop('disabled','')
        .prop('selected','')
        .eq(0)
        .prop('selected','selected');
      $('input[name=q3-2CheackMin] option')
        .prop('disabled','')
        .prop('selected','')
        .eq(0)
        .prop('selected','selected');
      $('input[name=q3-2CheackMax] option')
        .prop('disabled','')
        .prop('selected','')
        .eq(0)
        .prop('selected','selected');
      $('.select-list li').removeClass('selected');
      _view_step1.addClass('current');
      setSearchCondition();
      changeSearchCondition();
      updateLinks();
    }
    
    
    /**
     * 「目的」の選択内容をCookieに保存する。
     */
    function savePurpose(){
//      var saveString = '';
      savedPurposeString = '';
      $('input[name=q1Cheack]:checked').each(function(index,value){
        var tempV = $(value).val().replace('#','');
        if(savedPurposeString){
          savedPurposeString += '-';
        }
        savedPurposeString += tempV;
      });
      console.log(savedPurposeString)
      $.cookie('jsS_purpose',savedPurposeString,{expires: 30});
    }

    /**
     * 「目的」の選択内容をCookieから取得する。
     * @return {String} 「目的」の選択内容
     */
    function getPurpose(){
      var savedString = $.cookie('jsS_purpose');
      return savedString;
    }

    /**
     * 「期間」の選択内容をCookieに保存する。
     */
    function saveTerm(){
      var termObject = $('input[name=q2Cheack]:checked');
//      var savedString = termObject.val().replace('#','');
      saveSearchCondition = termObject.val().replace('#','');
      $.cookie('jsS_term',saveSearchCondition,{expires: 30});
    }

    /**
     * 「期間」の選択内容をCookieから取得する。
     * @return {String} 「期間」の選択内容
     */
    function getTerm(){
      var savedString = $.cookie('jsS_term');
      return savedString;
    }


    /**
     * 「予算」の選択内容をCookieに保存する。
     */
    function saveBudget(num){
//      var savedString = '';
      saveBudgetString = '';
      switch(num){
          //if short term has selected
        case 3:
          saveBudgetString = $('#_view_num_3_1_selection').val();
          break;
          //if long term has selected
        case 4:
          var minNum = $('#_view_num_3_2_selectionMin').val();
          var maxNum = $('#_view_num_3_2_selectionMax').val();
          saveBudgetString  = minNum + '-' + maxNum;
          break;
      }
      $.cookie('jsS_budget',saveBudgetString,{expires: 30});
    }

    /**
     * 「予算」の選択内容をCookieから取得する。
     * @return {String} 「予算」の選択内容
     */
    function getBudget(){
      var savedString = $.cookie('jsS_budget');
      return savedString;
    }


    /**
     * 「そのほかご要望」をCookieから取得する。
     */
    function getOther(){
      var savedString = $.cookie('jsS_other');
      return savedString;
    }

    /**
     * Cookieに保存した時刻を取得する
     * @return {String} Cookieを保存した時間
     */
    function getTime(flag){
      var ts;
      var now;

      now = new Date();
      var monthV = now.getMonth() + 1;
      if(monthV < 10){ monthV = '0' + String(monthV); }
      var dayV = now.getDate();
      if(dayV < 10){ dayV = '0' + String(dayV); }
      var hourV = now.getHours();
      if(hourV < 10){ hourV = '0' + String(hourV); }
      var minV = now.getMinutes();
      if(minV < 10){ minV = '0' + String(minV); }
      var secV = now.getSeconds();
      if(secV < 10){ secV = '0' + String(secV); }

      if(flag){
        ts = String(now.getFullYear()) + String(monthV) + String(dayV) +'_'+ String(hourV)  + String(minV) + String(secV);
        return ts;
      }

      ts = $.cookie('jsS_datetime');
      if(!ts){
        now = new Date();
        ts = String(now.getFullYear()) + String(monthV) + String(dayV) +'_'+ String(hourV)  + String(minV) + String(secV);
        $.cookie('jsS_datetime', ts);
      }
      return ts;
    }

    
    

    /**
     * 検索条件の設定
     */
    function setSearchCondition(){
      var searchConditionData = getSearchCondition();
      searchForAds(searchConditionData);

      // STEP1の値を設定
      var stringPurpose = getPurpose();
      if(stringPurpose){  //Cookieに値があるとき
        var purposeArray = stringPurpose.split('-');
        if(purposeArray.length > 0){
          $('#jsSearchCoditionPurpose').find('li').removeClass('selected');
          //          var tempV = '';
          $('#jsSearchCoditionPurpose input').each(function(index){
            var _this = $(this);
            var tempV = _this.attr('value');
            var _parentEl = _this.parents('li');
            //保存したCookie内に値が存在するときはチェックを入れる
            if($.inArray(tempV, purposeArray) > -1){
              _this.prop('checked','checked');
              _parentEl.addClass('selected');
            }else{
              _this.prop('checked','');
              //              _parentEl.removeClass('selected');
            }
          });
        }
      }else{  //Cookieに値がなかったとき
        $('#jsSearchCoditionPurpose input').each(function(){
          $(this).prop('checked','');
        });
      }

      // STEP2の値を設定
      var stringTerm = getTerm();
      if(stringTerm){
        $('#jsSearchCoditionTerm').find('li').removeClass('selected');
        $('#jsSearchCoditionTerm input').each(function(){
          var _this = $(this);
          var tempV = _this.attr('value');
          var _parentEl = _this.parents('li');
          if(stringTerm == tempV){
            _this.prop('checked','checked');
            _parentEl.addClass('selected');
          }else{
            _this.prop('checked','');
          }
        });
      }else{
        $('#jsSearchCoditionTerm input').each(function(){
          $(this).prop('checked','');
        });
      }


      // STEP3の値を設定
      var stringBudget = getBudget();
      if(stringBudget){
        var budgetFlag = true;
        //        console.log('STEP3:'+stringBudget)
        switch(stringBudget){
          case '3a':
            break;
          case '3b':
            break;
          case '3c':
            break;
          case '3d':
            break;
          case '3e':
            break;
          default: //Cookieの設定されていないか、複数の値が設定されているとき
            budgetFlag = false;
            var budgetArray = stringBudget.split('-');
            //最低予算の設定
            var minV = Number(budgetArray[0]);
            $('#jsSimulationTypeBMin option').each(function(){
              var _this = $(this);
              if(Number(_this.attr('value')) == minV){
                _this.prop('selected','selected');
              }
            });
            //最高予算の設定
            var maxV = Number(budgetArray[1]);
            $('#jsSimulationTypeBMax option').each(function(){
              var _this = $(this);
              if(Number(_this.attr('value')) <= minV){
                _this.addClass('jsSimulationDisabled');
                _this.prop('disabled','disabled');
              }else if(Number(_this.attr('value')) == maxV){
                _this.removeClass('jsSimulationDisabled');
                _this.prop('disabled','');
                _this.prop('selected','selected');
              }else{
                _this.removeClass('jsSimulationDisabled');
                _this.prop('disabled','');
              }
            });

            break;
        }
        //上限下限の設定がないとき
        if(budgetFlag){
//          console.log('budgetFlag:'+budgetFlag)
          $('#jsSimulationTypeA').show();
          $('#jsSimulationTypeB').hide();

          $('#jsSimulationTypeASelect option').each(function(){
            var _this = $(this);
            var tempV = _this.attr('value');
//            console.log('tempV:'+tempV)
//            console.log('stringBudget:'+stringBudget)
            if(tempV == stringBudget){
              _this.prop('selected','selected');
            }else{
              _this.prop('selected','');
            }
          });
        }else{//上限下限の設定があるとき
          $('#jsSimulationTypeA').hide();
          $('#jsSimulationTypeB').show();
        }

      }else{
        $('#jsSimulationTypeASelect option').eq(0).prop('selected','selected');
        $('#jsSimulationTypeBMin option').eq(0).prop('selected','selected');
        $('#jsSimulationTypeBMax option').eq(0).prop('selected','selected');
        $('#js_otherSelections input').each(function(){
          $(this).prop('checked','');
        });
//        $('#jsSimulationTypeA').hide();
//        $('#jsSimulationTypeB').show();
        $('#jsSimulationTypeA').show();
        $('#jsSimulationTypeB').hide();
      }


      var jsS_otherString = $.cookie('jsS_other');
      if(jsS_otherString){
        var jsS_otherAry = jsS_otherString.split('-');
        $('#js_otherSelections input').each(function(){
          var _tempVV = $(this).attr('value');
          for(var i in jsS_otherAry){
            if(_tempVV == jsS_otherAry[i]){
              $(this).prop('checked','checked');
            }
          }
        });
      }
    }


    /**
     * 検索条件の変更
     */
    function changeSearchCondition(){
      var nowString = getTime(true);
      $.cookie('jsS_datetime',nowString);
      var searchConditionData = getSearchCondition();
      //      console.log(searchConditionData);

      //STEP1、STEP2、STEP3とその他ご要望が設定されていないとき
      if(!searchConditionData.purpose &&
         !searchConditionData.term &&
         !searchConditionData.budget &&
         !searchConditionData.other){

        for(var key in searchData){
          var domName = '#jsSimulation_' + key;
          $(domName).hide();
        }

        $('#jsSimulation_none').hide();
        $('#jsSimulation_contact').hide();
        $('#jsSimulation_noCondition').show();
        return;
      }

      var matchedAd = searchForAds(searchConditionData);
      var domName = '';

      $('#jsSimulation_none').hide();
      $('#jsSimulation_noCondition').hide();
      $('#jsSimulation_contact').hide();

      for(var key in searchData){

        domName = '#jsSimulation_' + key;
        //        console.log('消える要素'+domName)
        $(domName).hide();
      }

      var matchFlag = false;
      var linkStr = '';
      var linkStrAry = [];

      for(var key in matchedAd){
        var tempV = matchedAd[key];

        if(tempV){
          matchFlag = true;
          domName = '#jsSimulation_' + tempV;
//                    console.log('表示する要素:'+domName);
          $(domName).fadeIn();

          linkStr = $(domName + ' .js_targetPlanLink').attr('href');

          if(linkStr != undefined){
            linkStrAry = linkStr.split('&');
            if(linkStrAry.length > 1){
              linkStr = linkStrAry[0];
              linkStr += '&sim=' + getConditionStringPlans();
            }else{
              linkStr += '&sim=' + getConditionStringPlans();
            }
            // ????
            linkStr += '&btn=pln' + '&cok=' + nowString + '&rf=prdoc';
            $(domName + ' .js_targetPlanLink').attr('href', linkStr);
          }
        }
      }

      if(!matchFlag){
        $('#jsSimulation_none').fadeIn();
      }else{
        $('#jsSimulation_contact').fadeIn();
      }
    }



    /**
     * 検索条件を取得する
     */
    function getSearchCondition(){
      var conditionData = null;
      var budgetData = getBudget();
      var traBudData = '';
      if(budgetData){
        switch(budgetData){
          case '3a':
          case '3b':
          case '3c':
          case '3d':
          case '3e':
            traBudData = budgetData;
            break;
          default:
            var budAry = budgetData.split('-');
//            console.log(budAry)
            var budMin = budAry[0];
            var budMax = budAry[1];
            var budMinParm = _data_map_budgetMinParam[budMin];
            var budMaxParm = _data_map_budgetMaxParam[budMax];
            traBudData = budMinParm + '-' + budMaxParm;
            break;
        }
      }
      conditionData = {
        'purpose': getPurpose(),
        'term': getTerm(),
        'budget': traBudData,
        'other' : getOther()
      };
      return conditionData;
    }
    
    



    function searchForAds(condition){
//      console.log(condition)
      var matchedAds = [];
      var i = 0;
      var ii = 0;

      var isSearched = false;

      //get all the ad
      for(i in searchData){
        matchedAds.push(i);
      }

      //this is the global value
      //searchData

      var _term = condition.term;
      if(_term){
        isSearched = true;
        for(i in searchData){
          if(searchData[i][_term] == 0){
            var iii;
            for(iii in matchedAds){
              if(matchedAds[iii] == i){
                delete matchedAds[iii];
              }
            }
          }
        }
      }

      var _purpose = condition.purpose;
      if(_purpose){
        isSearched = true;
        var purposeAry = _purpose.split('-');
        for(i in purposeAry){
          var _pindexStr = purposeAry[i];
          for(ii in matchedAds){
            var _indexStr = matchedAds[ii];
            if(searchData[_indexStr][_pindexStr] == 0){
              delete matchedAds[ii];
            }
          }
        }
      }

      var _budget = condition.budget;
      if(_budget){
        isSearched = true;
        var budgetAry = _budget.split('-');
        if(budgetAry.length > 1){
          var sValue = budgetAry[0];
          var mValue = budgetAry[1];
          for(i in matchedAds){
            var _indexStr = matchedAds[i];
            if(searchData[_indexStr][sValue] == 0){
              if(searchData[_indexStr][mValue] == 0){
                delete matchedAds[i];
              }
            }
          }
        }else{
          for(i in matchedAds){
            var _indexStr = matchedAds[i];
            if(searchData[_indexStr][_budget] == 0){
              delete matchedAds[i];
            }
          }
        }
      }


      var _other = condition.other;
      if(_other){
        isSearched = true;
        var otherAry = _other.split('-');
        for(i in otherAry){
          var _oindexStr = otherAry[i];
          for(ii in matchedAds){
            var _indexStr = matchedAds[ii];
            if(searchData[_indexStr][_oindexStr] == 0){
              delete matchedAds[ii];
            }
          }
        }
      }


      var matchResultAry = [];
      for(i in matchedAds){
        if(matchedAds[i]){
          matchResultAry.push(matchedAds[i]);
        }
      }
      saveResultString = matchResultAry.join('-');
      if(isSearched){
        $.cookie('jsS_result',saveResultString,{expires: 30});
      }
      return matchedAds;
    }
    /*
		 * get searched plan
		 */
    function getMatchedStringPlans(){
      var str = $.cookie('jsS_result');
      if(!str){
        return '';
      }
      var strAry = str.split('-');
      return strAry.join('');
    }

    /*
		 * get condition plan
		 */
    function getConditionStringPlans(){
      var pString = $.cookie('jsS_purpose');
      var tString = $.cookie('jsS_term');
      var bString = $.cookie('jsS_budget');
      var sString = $.cookie('jsS_other');

      var returnStr = '';
      if(pString){
        var pStringAry = pString.split('-');
        returnStr += pStringAry.join('');
      }
      if(tString){
        var tStringAry = tString.split('-');
        returnStr += tStringAry.join('');
      }
      if(bString){
        var bAry = bString.split('-');
        if(bAry.length > 1){
          var b1 = bAry[0];
          var b2 = bAry[1];
          returnStr += _data_map_budgetMinParam[b1];
          returnStr += _data_map_budgetMaxParam[b2];
        }else{
          returnStr += bAry[0];
        }
      }
      if(sString){
        var sStringAry = sString.split('-');
        returnStr += sStringAry.join('');
      }
      return returnStr;
    }


    function updateLinks(){
      var nowString = getTime();

      //js_soudanBtn
      var linkStr = $('#js_soudanBtn').attr('href');
      var linkStrAry = linkStr.split('?');
      if(linkStrAry.length > 1){
        linkStr = linkStrAry[0];
        linkStr += '?plan=' + getMatchedStringPlans() + '&sim=' + getConditionStringPlans();
      }else{
        linkStr += '?plan=' + getMatchedStringPlans() + '&sim=' + getConditionStringPlans();
      }
      linkStr += '&btn=req' + '&cok=' + nowString + '&rf=prdoc';
      $('#js_soudanBtn').attr('href', linkStr);


      //js_contactAllBtn
      linkStr = $('#js_contactAllBtn').attr('href');
      linkStrAry = linkStr.split('&');
      if(linkStrAry.length > 1){
        linkStr = linkStrAry[0];
        linkStr += '&plan=' + getMatchedStringPlans() + '&sim=' + getConditionStringPlans();
      }else{
        linkStr += '&plan=' + getMatchedStringPlans() + '&sim=' + getConditionStringPlans();
      }
      linkStr += '&cok=' + nowString + '&rf=prdoc';
      $('#js_contactAllBtn').attr('href', linkStr);


      //js_ZeroAllBtn
      linkStr = $('#js_ZeroAllBtn').attr('href');
      linkStrAry = linkStr.split('&');
      if(linkStrAry.length > 1){
        linkStr = linkStrAry[0];
      }
      linkStr += '&sim=' + getConditionStringPlans();
      linkStr += '&cok=' + nowString + '&rf=prdoc';
      $('#js_ZeroAllBtn').attr('href', linkStr);
    }



    /**
     * STEPの切り替えを行う
     * @param {String} 次に表示するSTEP
     */
    function changePage(step){
      _view_steps.find('li').removeClass('current');
      _views.hide();
      switch(step){
        case 'step1':
          _view_step1.addClass('current');
          _view_num_1.fadeIn(fadeSp);
          break;
        case 'step2':
          _view_step2.addClass('current');
          _view_num_2.fadeIn(fadeSp);
          break;
        case 'step3_1':
          _view_step3.addClass('current');
          _view_num_3_1.fadeIn(fadeSp);
          break;
        case 'step3_2':
          _view_step3.addClass('current');
          _view_num_3_2.fadeIn(fadeSp);
          break;
        case 'step4':
          setSearchCondition();
          changeSearchCondition();
          updateLinks();
          //          _view_steps.hide();
          console.log('savedPurposeString:'+savedPurposeString)
          console.log('saveBudgetString:'+saveBudgetString)
          console.log('saveSearchCondition:'+saveSearchCondition)
          console.log('saveOtherSelections:'+saveOtherSelections)
          _view_select.hide();
          _view_num_4.fadeIn(fadeSp);
          _view_num_4_detail.show();
          break;
      }
    }


    /**
     * Cookieに保存する
     * @param {String} Cookieのキー
     * @param {String} Cookieに保存する値
     * @param {Number} Cookieの有効期限（日数）
     */
    function saveCookie(key,value,expires){
      //      console.log('saveCookie!!!!!!!')
      //有効期限が未設定、または値が数値でない場合は30日に設定
      if(!expires && isNaN(expires)){
        expires = 30;
      }
      $.cookie(key,value,{expires: expires});
    }
    
    
    
    
    
    /**********************
      STEP1
    ***********************/
    //STEP1 チェックボックス
    $('input[name=q1Cheack]').on('change',function(e){
      e.preventDefault();
      $(this).parents('li').toggleClass('selected');
      //エラーが表示されていた時の処理
      if($('.JsError').css('display') != 'none'){
        $('.JsError').slideUp();
      }
    });
    
    
    //STEP1 次へボタン
    $('#btn-next1').on('click',function(e){
      e.preventDefault();
      var selectNum = $('input[name=q1Cheack]:checked').length;
//      console.log('STEP1 selected:'+selectNum)
      if(selectNum < 1){  //エラーの時
        //エラーメッセージ表示
//        console.log('STEP1 ERROR')
        var erText = _view_num_1.find('.JsError').eq(0);
        erText.slideDown();
      }else{
        _view_num_1.find('.JsError').hide();
        savePurpose();
        changePage('step2')
      }
    });


    /**********************
      STEP2
    ***********************/
    //STEP2 ラジオボタン
    $('input[name=q2Cheack]').on('change',function(e){
      e.preventDefault();
      $(this).parents('.select-list').find('li').removeClass('selected');
      $(this).parents('li').addClass('selected');
      //エラーが表示されていた時の処理
      if($('.JsError').css('display') != 'none'){
        $('.JsError').slideUp();
      }
    });
    
    //STEP2 次へボタン
    $('#btn-next2').on('click',function(e){
      e.preventDefault();
      var selectNum = $('input[name=q2Cheack]:checked').length;
//      var selectNum = _view_num_2.find('.selected').length;
//      console.log('STEP2 selected:'+selectNum)
      if(selectNum < 1){  //エラーの時
        //エラーメッセージ表示
//        console.log('STEP2 ERROR')
        var erText = _view_num_2.find('.JsError').eq(0);
        erText.slideDown();
      }else{
        _view_num_2.find('.JsError').hide();
        saveTerm();
        var slectedCase = $('input[name=q2Cheack]:checked').val();
        switch(slectedCase){
          case '#2a':
            changePage('step3_1');
            $('.JsError').hide();
            break;
          case '#2b':
          case '#2c':
            changePage('step3_2');
            $('.JsError').hide();
            break;
        }
      }
    });
    
    
    /**********************
      STEP3
    ***********************/
    $('#_view_num_3_1_selection').change(function(){
      var _this = $(this);
      var _selectedValue = _this.val();
      if(_selectedValue == '0'){
        //do nothing so far
//        console.log('STEP3 ERROR')
      }else{
        _view_num_3_1.find('.JsError').eq(0).slideUp();
      }
    });
    
    
    //STEP3 次へボタン
    $('#btn-next3_1').on('click',function(e){
      e.preventDefault();
      var _selectedValue = $('#_view_num_3_1_selection').val();
      if(_selectedValue == 0){
        var erText = _view_num_3_1.find('.JsError').eq(0).slideDown();
        //$('.JsError').text('???????');
        //$('.JsError').fadeIn("slow");
        var erText = _view_num_3_1.find('.JsError').eq(0);
        erText.slideDown();
        return;
      }else{
        _view_num_3_1.find('.JsError').hide();
      }
      saveBudget(3);
      changePage('step4');
    });
    
    
    $('#_view_num_3_2_selectionMin').change(function(){
      var _this = $(this);
      var _selectedValue = Number(_this.val());
      var maxSelectedVal = Number($('#_view_num_3_2_selectionMax').val());
      if(_selectedValue > 0){
        $('#_view_num_3_2_selectionMax option').prop('selected','').each(function(){
          var tempV = Number($(this).attr('value'));
          if(_selectedValue >= tempV){
            $(this).prop('disabled','disabled').addClass('jsSimulationDisabled');
          }else{
            $(this).prop('disabled','').removeClass('jsSimulationDisabled');
          }
        });
      }else{
        $('#_view_num_3_2_selectionMax option').prop('selected','').prop('disabled','disabled').addClass('jsSimulationDisabled');
      }
      if(maxSelectedVal <= _selectedValue){
        $('#_view_num_3_2_selectionMax option[class!=jsSimulationDisabled]').eq(0).prop('selected','selected');
      }else{
        $('#_view_num_3_2_selectionMax option').each(function(){
          if($(this).attr('value') == maxSelectedVal){
            $(this).prop('disabled','').removeClass('jsSimulationDisabled').prop('selected','selected');
          }
        });
      }
      _view_num_4.find('.JsError').eq(0).slideUp();
    });
    
    
    
    $('#btn-next3_2').on('click',function(e){
      e.preventDefault();
      var _selectedValueMin = $('#_view_num_3_2_selectionMin').val();
      var _selectedValueMax = $('#_view_num_3_2_selectionMax').val();
      
      if(_selectedValueMin == 0){
        _view_num_3_2.find('.JsError').eq(0).slideDown();
        return;
      }
      if(_selectedValueMax == 0){
        _view_num_3_2.find('.JsError').eq(0).slideDown();
        return;
      }
      _view_num_3_2.find('.JsError').hide();
      
      saveBudget(4);
      changePage('step4');
    });
    
    



    // STEP1へ戻る
    $('#jsSimulationBacktoStep1').on('click',function(e){
      e.preventDefault();
//      clearCondition();
      _view_steps.show();
      _view_steps.find('li').removeClass('current');
      _view_step1.addClass('current');
      _view_num_2.hide();
      _view_num_3_1.hide();
      _view_num_3_2.hide();
      _view_num_4.hide();
      _view_num_1.fadeIn();
    });


    // STEP2へ戻る
    $('.jsSimulationBacktoStep2').on('click',function(e){
      e.preventDefault();
//      clearCondition();
      _view_steps.show();
      _view_steps.find('li').removeClass('current');
      _view_step2.addClass('current');
      _view_num_1.hide();
      _view_num_3_1.hide();
      _view_num_3_2.hide();
      _view_num_4.hide();
      _view_num_2.fadeIn();
    });


    //導入をスキップする
    $('#jsSimulationSkipBtn').on('click',function(e){
      e.preventDefault();
      clearCondition();
      _view_select.hide();
      _view_clear.hide();
      _view_num_4.fadeIn(fadeSp);
      _view_num_4_detail.show(function(){
        changeSearchCondition();
        updateLinks();
      });
    });

    
    
    
    
    
  

    
    /*==============================================
      結果表示後の表示切替
    ================================================*/
    /**
     * 結果画面で「目的」を変更した時の表示切替
     */
    $('#jsSearchCoditionPurpose input').on('click',function(){
      savedPurposeString = '';
      $('#jsSearchCoditionPurpose input:checked').each(function(){
        var _this = $(this);
        if(savedPurposeString){
          savedPurposeString += '-';
        }
        savedPurposeString += _this.attr('value');
      });
    });


    /**
     * 結果画面で「期間」を変更した時の表示切替
     */
    $('#jsSearchCoditionTerm input').on('click',function(){
      var _this = $(this);
      saveSearchCondition = _this.attr('value');
      switch(saveSearchCondition){
        case '2a':
          $('#jsSimulationTypeASelect option').prop('selected','').eq(0).prop('selected','selected');
          $('#jsSimulationTypeA').hide();
          $('#jsSimulationTypeB').hide();
          $('#jsSimulationTypeA').fadeIn();
          break;
        case '2b':
        case '2c':
          $('#jsSimulationTypeBMin option').prop('selected','').eq(0).prop('selected','selected');
          $('#jsSimulationTypeBMax option').prop('disabled','').prop('selected','').eq(0).prop('selected','selected');
          $('#jsSimulationTypeB').hide();
          $('#jsSimulationTypeA').hide();
          $('#jsSimulationTypeB').fadeIn();
          break;
      }
    });
    
    
    /**
     * 結果画面で「予算」を変更した時の表示切替
     */
    $('#jsSimulationTypeASelect').change(function(){
      saveBudgetString = $('#jsSimulationTypeASelect').val();
    });
    
    
    /**
     * 結果画面で「予算」を変更した時の表示切替
     */
    $('#jsSimulationTypeBMin').change(function(){
      var _this = $(this);
      var _selectedValue = Number(_this.val());
      var maxSelectedVal = Number($('#jsSimulationTypeBMax').val());
      if(_selectedValue > 0){
        $('#jsSimulationTypeBMax option').prop('selected','').each(function(){
          var tempV = Number($(this).attr('value'));
          if(_selectedValue >= tempV){
            $(this).prop('disabled','disabled').addClass('jsSimulationDisabled');
          }else{
            $(this).prop('disabled','').removeClass('jsSimulationDisabled');
          }
        });
      }else{
        $('#jsSimulationTypeBMax option').prop('selected','').prop('disabled','disabled').addClass('jsSimulationDisabled');
      }
      if(maxSelectedVal <= _selectedValue){
        $('#jsSimulationTypeBMax option[class!=jsSimulationDisabled]').eq(0).prop('selected','selected');
      }else{
        $('#jsSimulationTypeBMax option').each(function(){
          if($(this).attr('value') == maxSelectedVal){
            $(this).prop('disabled','').removeClass('jsSimulationDisabled').prop('selected','selected');

          }
        });
      }

//      var saveBudgetString = '';
      var minNum = $('#jsSimulationTypeBMin').val();
      var maxNum = $('#jsSimulationTypeBMax').val();
      saveBudgetString  = minNum + '-' + maxNum;
    });
    
    
    $('#jsSimulationTypeBMax').change(function(){
//      var savedString = '';
      var minNum = $('#jsSimulationTypeBMin').val();
      var maxNum = $('#jsSimulationTypeBMax').val();
      saveBudgetString  = minNum + '-' + maxNum;
    });
    
    


    /**
     * 結果画面で「そのほかご要望」を変更した時の表示切替
     */
    $('#js_otherSelections input').on('click',function(){
      var _this = $(this);
      saveOtherSelections = '';
      $('#js_otherSelections input:checked').each(function(){
        if(saveOtherSelections){
          saveOtherSelections += '-';
        }
        saveOtherSelections += $(this).attr('value');
      });
//      console.log(saveOtherSelections)
    });
    
    
    /**
     * 再検索ボタン
     */
    $('#searchPlan').on('click',function(e){
      e.preventDefault();
      $.cookie('jsS_result','');
      
      saveCookie('jsS_purpose',savedPurposeString,30);   //目的
      saveCookie('jsS_budget',saveBudgetString,30);
      saveCookie('jsS_term',saveSearchCondition,30);
      saveCookie('jsS_other',saveOtherSelections,30);

      changeSearchCondition();
      updateLinks();
      _view_clear.show();
    });
    
    
    $('#initBtn').on('click',function(e){
      e.preventDefault();
      searchReset();
//      init();
      _view_select.show();
      _view_steps.show();
      _view_steps.find('li').removeClass('current');
      _view_step1.addClass('current');
      _view_num_2.hide();
      _view_num_3_1.hide();
      _view_num_3_2.hide();
      _view_num_4.hide();
      _view_num_1.fadeIn();
    });
    
    /**
     * 診断条件をクリアする
     */
    $('#reset').on('click',function(e){
      e.preventDefault();
      searchReset();

    });
    
    function searchReset(){
      $('option').prop('selected',false); 
      $('input:checkbox').prop('checked',false); 
      $('input:radio').prop('checked',false); 
      $('.select-list li').removeClass('selected');
      savedPurposeString = '';
      saveBudgetString = '';
      saveSearchCondition = '';
      saveOtherSelections = '';
      saveResultString = '';
    }
                        
                        

  });
})();