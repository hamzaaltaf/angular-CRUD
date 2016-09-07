angular.module('eggly',[

])
.controller('mainctrl',function($scope){
  $scope.mytext = 'hello world!';
  $scope.categories = [
    {"id": 0, "name":"Development"},
    {"id": 1, "name":"Design"},
    {"id": 2, "name":"Humor"},
    {"id": 3 , "name":"Excercise"}
  ];
  $scope.bookmarks = [
    {"id": 0, "title": "Angular JS", "url": "http://angularjs.org","category": "Development"},
    {"id": 1, "title": "Angular JS", "url": "http://angularjs.org","category": "Development"},
    {"id": 2, "title": "Angular JS", "url": "http://angularjs.org","category": "Development"},
    {"id": 3, "title": "Angular JS", "url": "http://angularjs.org","category": "Humor"},
    {"id": 4, "title": "Angular JS", "url": "http://angularjs.org","category": "Humor"},
    {"id": 5, "title": "Angular JS", "url": "http://angularjs.org","category": "Design"},
    {"id": 6, "title": "Angular JS", "url": "http://angularjs.org","category": "Design"}
  ];
  //variable to set categories
  $scope.currentCategory = null;

  function setCurrentCategory(category){
    $scope.currentCategory = category;

    resetCreateForm();
  };

  function isCurrentCategory(category){
    return $scope.currentCategory !== null && $scope.currentCategory === category
  }

  $scope.setCurrentCategory = setCurrentCategory;
  $scope.isCurrentCategory = isCurrentCategory;
  //-------------------------------------------------------------------------------------------
    // CRUD
  //--------------------------------------------------------------------------------------------

  function resetCreateForm(){
    $scope.newBookmark = {
      title:'',
      url:'',
      category: $scope.currentCategory
    }
  }
  function createBookmark(bookmark){
    bookmark.id = $scope.bookmarks.length;
    $scope.bookmarks.push(bookmark);
    resetCreateForm();
  }

  $scope.editedBookmark = null;

  function setEditedBookmark(bookmark){
    $scope.editedBookmark = angular.copy(bookmark);
  }

  function updateBookmark(bookmark){
    var index = _.findIndex($scope.bookmarks, function(b){
      return b.id == bookmark.id
    })
    $scope.bookmarks[index] = bookmark;
    $scope.editedBookmark = null;
    $scope.isediting = false;
  }

  function deleteBookmark(bookmark){
    _.remove($scope.bookmarks, function(b){
      return bookmark.id == b.id;
    });
  }

  $scope.setEditedBookmark = setEditedBookmark;
  $scope.updateBookmark = updateBookmark;
  $scope.deleteBookmark = deleteBookmark;
  $scope.createBookmark = createBookmark;
  $scope.resetCreateForm = resetCreateForm;
//-------------------------------------------------------------------------------------------
  // Creating and Editing
//--------------------------------------------------------------------------------------------

$scope.iscreating = false;
$scope.isediting = false;

function startCreating() {
   $scope.iscreating = true;
   $scope.isediting = false;
   resetCreateForm();
}

function startEditing(){
   $scope.isediting = true;
   $scope.iscreating = false;
}

function cancelEditing(){
   $scope.isediting = false;
}

function cancelCreating(){
     $scope.iscreating= false;
}

function shouldShowCreating(){
  return $scope.iscreating && !$scope.isediting;
}

function shouldShowEditing(){
  return $scope.isediting && !$scope.iscreating;
}

$scope.startCreating = startCreating;
$scope.startEditing = startEditing;
$scope.cancelCreating = cancelCreating;
$scope.cancelEditing = cancelEditing;
$scope.shouldShowEditing = shouldShowEditing;
$scope.shouldShowCreating = shouldShowCreating;


});
