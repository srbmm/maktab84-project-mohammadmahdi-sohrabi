import {useState} from 'react';
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
const initialValue = [
    {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
    },
]

export const EditText = () => {
    const [editor] = useState(() => withReact(createEditor()))
    return (
        <Slate editor={editor} value={initialValue}>
            <Editable />
        </Slate>
    )
}