export class Poll {
  constructor(
    public _id: string ='',
    public question: string = '',
    public option1: string = '',
    public option2: string = '',
    public option3: string = '',
    public option4: string = '',
    public vote: number =0,
    // public editable: boolean = false,
    // public created_at :Date =null
  ){}
}
