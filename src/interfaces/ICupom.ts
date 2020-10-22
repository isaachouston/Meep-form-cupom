export interface ICupom{    
    ownerId: string;   
    paidByMeep: boolean;   
    name: string;    
    description: string;    
    imageUrl: string;    
    value: number;    
    maxValue?: number;
    minOrderValue?: number;  
    valueType: number; // enum
    type: number; // enum   
    appliedIn: number; // enum  
    startAt?: Date;    
    finishAt?: Date; 
}