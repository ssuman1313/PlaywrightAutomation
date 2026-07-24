export class RandomHelper {

    public static generateEmail(): string {

        return `user${Date.now()}@test.com`;

    }

}