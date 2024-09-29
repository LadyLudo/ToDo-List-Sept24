export class ToDo {
    title: string;
    content: string;
    checked: boolean;

    constructor(title?: string, content?: string, checked?: boolean){
        this.title = title ? title : '';
        this.content = content ? content : '';
        this.checked = checked ? checked: false;
    }
}