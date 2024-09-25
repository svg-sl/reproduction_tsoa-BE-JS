import { Get, Route } from 'tsoa';
import { Controller } from 'tsoa';

@Route('test')
export class ActiveRegionsController extends Controller {
    @Get()
    public async getActiveRegions(): Promise<Boolean> {
        // expect this to be covered
        [1, 2].forEach((i) => {
            console.log(i);
        });
        // expect this to not be covered
        return false;
    }
}
