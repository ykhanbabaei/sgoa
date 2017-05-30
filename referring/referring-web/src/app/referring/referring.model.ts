export class Referring{
    subject: string;
    sender: string; 
    desc: string;
    image: string;
    id: number;
    receivers: Receiver[];
}

export class Receiver{
    name: string;
    id: number;
}