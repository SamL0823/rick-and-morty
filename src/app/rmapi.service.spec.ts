import { RmapiService } from "./rmapi.service";

import { get } from "http";

//Checks if local call is running

let service: RmapiService;

it("check Service is running", () => {

 expect(RmapiService);

});

//Checks to see if call has the API URL

it("check API URL", () => {

 expect(get).toContain(service);
});
