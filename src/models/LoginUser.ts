export interface LoginUser {

    username: string;

    password: string;

    expectedResult: "Success" | "Failure";

    testCaseName: string;

}