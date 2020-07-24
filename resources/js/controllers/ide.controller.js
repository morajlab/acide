export function ideCtrl($scope , FloatWindow , directoryStructure, storageHandler
                            , terminalHandler , promiseHandler , ACE) {
    storageHandler.init();
    ACE.init();
    storageHandler.reset();
    FloatWindow.path();
    directoryStructure.refresh();
    promiseHandler.reset();

    $scope.showTerminal = function () {
        terminalHandler.toggle();
        if(!terminalHandler.isInitiate()) {
            terminalHandler.append();
            terminalHandler.setEvents();
        }
    };

    $scope.minimizeTerminal = function () {
        terminalHandler.hide();
    };

    $scope.appendTerminal = function () {
        terminalHandler.append();
    };
}