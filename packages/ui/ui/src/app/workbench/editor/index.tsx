import 'reflect-metadata';
import { connect } from '@acide/ui/app/react';
import { container } from 'tsyringe';
import { EditorController } from '@acide/ui/app/controller/editor';
import { Editor } from './editor';
import { EditorService } from '@acide/ui/app/services';

const editorService = container.resolve(EditorService);
import { EditorStatusBarView } from './statusBarView';

const editorController = container.resolve(EditorController);

const EditorView = connect(editorService, Editor, editorController);

export { Editor, EditorStatusBarView, EditorView };
