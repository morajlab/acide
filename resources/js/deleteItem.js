import IDE from "./app";

IDE.controller('deleteItemCtrl' , function ($http , directoryStructure , elementHandler , Log , ACIDE) {
    $http.post(
        ACIDE.getFullRoute('DirectoryStructure@deleteItem') ,
        {
            path : elementHandler.getSelectedItemPath() ,
            type : elementHandler.getSelectedItemType()
        }
    ).then(function (response) {
            if(response.data.type === 'success') {
                directoryStructure.refresh();
            }
        } ,
        function (response) {
            Log.report('Delete Item AJAX Error !');
        });
});