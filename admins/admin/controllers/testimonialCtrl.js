angular.module('train_admin').controller('testimonialCtrl', function($scope, $state, $rootScope, commonService, Session, $stateParams) {

   $scope.fileId = "";
   $scope.addTestimonial = function() {
      $scope.formData = {
         image: $scope.fileId,
         name: $scope.testimonials,
         description: $scope.description
      }
      commonService.post('Admin/addTestimonial', $scope.formData, function(response) {
         if (response) {
            if (response.data && response.data.statusCode == '200') {
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

   //Upload Images on click
   $scope.uploadimage = function(file) {
      if (file.length) {
         var request = {
            file: file[0],
         };
         commonService.fileUpload('Files/uploadTmp', request, function(response) {
            if (response) {
               if (response.data && response.data.statusCode == '200') {
                  $scope.fileId = response.data.data[0].fileId;

               } else {
                  $scope.warning_message = response.data.message
               }
            }
         });
      }
   };

   // Testimonials list
   $scope.skip = 0;
   $scope.limit = 10;
   $scope.currentPage = 1;
   $scope.testimonialList = function() {
      // $scope.skip = ($scope.limit * $scope.currentPage) - $scope.limit;
      // var api_url = 'Admin/viewAllTesti';
      commonService.get('Admin/viewAllTesti', {}, function (response) {
         if (response) {
            if (response.data && response.data.statusCode == "200") {
               $scope.testimonialListResult = response.data.data[0].result;
               $scope.totalrecords = response.data.data[0].total_records;
            } else {
               swal({
                  "title": response.data.message,
                  "timer": "3000",
                  type: "error"
               });
            }
         }
      });
   }
   $rootScope.$on('myCustomEvent', function (event, data) {
     $scope.testimonialList();
   });

   // Hide testimonial
   $scope.HideTestimonial = function(testi_id) {
     swal({
       title: 'Are you sure you want to hide this testimonial?',
       text: "",
       type: "warning",
       showCancelButton: true,
       confirmButtonColor: '#DD6B55',
       confirmButtonText: 'Yes',
       cancelButtonText: "No",
       closeOnConfirm: false,
       closeOnCancel: true
     }, function(isConfirm) {
       if (isConfirm) {
         $scope.formData = {
           type: "1",
           hideOrUnhide: true,
           testimonial_id: testi_id,
         }
         commonService.put('Admin/hideTestimonial', $scope.formData, function(response) {
           if (response) {
             if (response.data && response.data.statusCode == '200') {
               swal({
                 "title": "Testimonial hide successfully.",
                 "timer": "3000",
                 type: "success"
               }, function() {
                 $rootScope.$emit('myCustomEvent', 'Data to send');
               });
             } else {
               swal({
                 "title": response.data.message,
                 "timer": "3000",
                 type: "error"
               });
             }
           }
         });
       } else {
         $state.go($state.current, {}, {
           reload: true
         })
       }
     });
   }
   // Unhide testimonial
   $scope.UnHideTestimonial = function(testi_id) {
     swal({
       title: 'Are you sure you want to unhide this testimonial?',
       text: "",
       type: "warning",
       showCancelButton: true,
       confirmButtonColor: '#DD6B55',
       confirmButtonText: 'Yes',
       cancelButtonText: "No",
       closeOnConfirm: false,
       closeOnCancel: true
     }, function(isConfirm) {
       if (isConfirm) {
         $scope.formData = {
           type: "1",
           hideOrUnhide: false,
           testimonial_id: testi_id,
         }
         commonService.put('Admin/hideTestimonial', $scope.formData, function(response) {
           if (response) {
             if (response.data && response.data.statusCode == '200') {
               swal({
                 "title": "Testimonial unhide successfully.",
                 "timer": "3000",
                 type: "success"
               }, function() {
                 $rootScope.$emit('myCustomEvent', 'Data to send');
               });
             } else {
               swal({
                 "title": response.data.message,
                 "timer": "3000",
                 type: "error"
               });
             }
           }
         });
       } else {
         $state.go($state.current, {}, {
           reload: true
         })
       }
     });
   }

   // Delete testimonial
   $scope.deleteTestimonial = function(testi_id) {
     swal({
       title: 'Are you sure you want to delete this testimonial?',
       text: "",
       type: "warning",
       showCancelButton: true,
       confirmButtonColor: '#DD6B55',
       confirmButtonText: 'Yes',
       cancelButtonText: "No",
       closeOnConfirm: false,
       closeOnCancel: true
     }, function(isConfirm) {
       if (isConfirm) {
         $scope.formData = {
           testimonial_id: testi_id
         }
         commonService.delete('Admin/deleteTestimonial', $scope.formData, function(response) {
           if (response) {
             if (response.data && response.data.statusCode == '200') {
               swal({
                 "title": "Testimonial deleted successfully.",
                 "timer": "3000",
                 type: "success"
               }, function() {
                 $rootScope.$emit('myCustomEvent', 'Data to send');
               });
             } else {
               swal({
                 "title": response.data.message,
                 "timer": "3000",
                 type: "error"
               });
             }
           }
         });
       } else {
         $state.go($state.current, {}, {
           reload: true
         })
       }
     });
   }



});
