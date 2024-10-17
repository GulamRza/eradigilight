'use client' // only in App Router

import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
    ClassicEditor,
    Autoformat,
    Bold,
    Italic,
    Underline,
    BlockQuote,
    Essentials,
    Heading,
    Indent,
    IndentBlock,
    Link,
    List,
    MediaEmbed,
    Mention,
    Paragraph,
    Table,
    TableColumnResize,
    TableToolbar,
    TextTransformation
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';


function CustomEditor({ onChange }: { onChange: Function }) {
    return (
        <CKEditor
            editor={ClassicEditor}
            onChange={(_, editor) => { onChange(editor.getData()) }}
            config={{
                toolbar: {
                    items: ['undo',
                        'redo',
                        '|',
                        'heading',
                        '|',
                        'bold',
                        'italic',
                        'underline',
                        '|',
                        'link',
                        'insertTable',
                        'blockQuote',
                        'mediaEmbed',
                        '|',
                        'bulletedList',
                        'numberedList',
                        '|',
                        'outdent',
                        'indent',],
                },
                plugins: [
                    Autoformat,
                    Bold,
                    Italic,
                    Underline,
                    BlockQuote,
                    Essentials,
                    Heading,
                    Indent,
                    IndentBlock,
                    Link,
                    List,
                    MediaEmbed,
                    Mention,
                    Paragraph,
                    Table,
                    TableColumnResize,
                    TableToolbar,
                    TextTransformation,
                ],
                initialData: '<p>Start Here...</p>'
            }}
        />
    );
}

export default CustomEditor;