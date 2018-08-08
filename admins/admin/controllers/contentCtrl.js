angular.module('train_admin').controller('contentCtrl', function($scope, $state, $rootScope, commonService, Session, $stateParams) {

  $scope.froalaOptions = {
    toolbarButtons: ["bold", "italic", "underline"]
  }

  $scope.content_detail = function() {
    commonService.get('Admin/getStaticPagesContent?content_type=' + $stateParams.page_id, {}, function(response) {
      if (response) {
        if (response.data && response.data.statusCode == '200') {
          //$("#loader").hide();
          $scope.page_data = response.data.data;
          $scope.EditorContent = $scope.page_data[0].content;
        } else {
          swal({
            "title": response.data.message,
            "timer": "3000",
            type: "error"
          });
          $state.go($state.current, {}, {
            reload: true
          })
        }
      }
    });
  }


  $scope.changecontent = function(a, data) {

    $scope.formData = {
      content: data,
      content_type: $stateParams.page_id
    }

    var api_url = 'Admin/updateStaticPageContents?content_type=' + $stateParams.page_id + '&content=' + data;

    commonService.post('Admin/updateStaticPageContents', $scope.formData, function(response) {
      if (response) {
        if (response.data && response.data.statusCode == '200') {
          // $scope.warning_message = response.data.message
          swal({
            "title": response.data.message,
            "timer": "3000",
            type: "success"
          });
          $state.go($state.current, {}, {
            reload: true
          })
        } else {
          $scope.warning_message = response.data.message
        }
      }
    });
  }

  //get faqList

  $scope.faq_list = function() {
    commonService.get('Admin/getFaq', {}, function(response) {
      if (response) {
        if (response.data && response.data.statusCode == '200') {
          //$("#loader").hide();
          $scope.page_data = response.data.data;
        } else {
          swal({
            "title": response.data.message,
            "timer": "3000",
            type: "error"
          });
          $state.go($state.current, {}, {
            reload: true
          })
        }
      }
    });
  }

  //add Faq

  $scope.addfaq = function() {

    $scope.formData = {
      question: $scope.faqData.question,
      answer:  $scope.faqData.answer
    }


    commonService.post('Admin/addFaq', $scope.formData, function(response) {
      if (response) {
        if (response.data && response.data.statusCode == '200') {
          // $scope.warning_message = response.data.message
          swal({
            "title": response.data.message,
            "timer": "3000",
            type: "success"
          });
          $state.go($state.current, {}, {
            reload: true
          })
        } else {
          $scope.warning_message = response.data.message
        }
      }
    });
  }

  //edit-faq_id
  $scope.edifaq_question = function() {



    commonService.get('Admin/getFaqDetail?faq_id=' + $stateParams.faq_id, {}, function(response) {
      if (response) {
        if (response.data && response.data.statusCode == '200') {
          //$("#loader").hide();
          $scope.page_data = response.data.data;
          $scope.question = $scope.page_data.question;
          $scope.answer = $scope.page_data.answer;
        } else {
          swal({
            "title": response.data.message,
            "timer": "3000",
            type: "error"
          });
          $state.go($state.current, {}, {
            reload: true
          })
        }
      }
    });
  }

  //edit faq-question

  $scope.editfaq = function() {

    $scope.formData = {
      question_id: $stateParams.faq_id,
      question:  $scope.question,
      answer:$scope.answer
    }
    console.log($scope.formData);


    commonService.put('Admin/editFaq', $scope.formData, function(response) {
      if (response) {
        if (response.data && response.data.statusCode == '200') {
          // $scope.warning_message = response.data.message
          swal({
            "title": response.data.message,
            "timer": "3000",
            type: "success"
          });
          $state.go($state.current, {}, {
            reload: true
          })
        } else {
          $scope.warning_message = response.data.message
        }
      }
    });
  }


});
