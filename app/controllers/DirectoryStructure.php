<?php
    namespace ACIDE\App\Controllers;

    use ACIDECore\App\Database;
    use ACIDE\App\Models\DatabaseProject;
    use ACIDECore\App\Response;
    use ACIDE\App\Models\Record;

    class DirectoryStructure {
        private $request = null;

        public function __construct($request) {
            $this->request = $request;
            (new Database())->init();
        }

        public function getDatabaseTree() {
            $slug = DatabaseProject::where('name' , '_active_project_')
                                      ->where('type' , 'label')->value('slug');
            if(empty($slug)) {
                return (new Response())->error(['Project' => 'does not exist'])->returnMsg();
            }

            $project = DatabaseProject::where('slug' , $slug)
                                      ->where('type' , 'project')->get()->toArray();
            $records = Record::where('project' , $slug)
                             ->where('type' , 'record')->get()->toArray();
            $active_record = Record::where('project' , $slug)
                                   ->where('type' , 'label')->value('name');
            if(empty($records)) {
                $records = [];
            }
            if(empty($active_record)) {
                $active_record = [];
            }

            return (new Response())->success([
                'project' => $project[0] ,
                'records' => $records ,
                'active_record' => $active_record
            ])->returnMsg();
        }
    }
?>