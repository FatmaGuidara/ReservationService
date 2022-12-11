export class UpdateDto {
    readonly devis:{
        programme: [
            {
                experienceId: string,
                partnerId: string,
                time: Date
            }
        ],
        price: number 
    };
    readonly userId: string;
    readonly payment: string;
}