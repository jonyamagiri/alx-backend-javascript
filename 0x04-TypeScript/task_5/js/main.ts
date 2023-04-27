interface MajorCredits {
    credits: number;
    brand: 'major';
}

interface MinorCredits {
    credits: number;
    brand: 'minor';
}

export const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): MajorCredits => {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'major'
    };
}

export const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): MinorCredits => {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'minor'
    };
}
