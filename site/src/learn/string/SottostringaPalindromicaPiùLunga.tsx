import React from "react";
import LearnBaseSection, { Title, Section, ExternalLink, List, IDE } from "../../components/LearnBaseSection";

const codeData = [
    {
        language: 'cpp',
        code: `#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int findPalindromeLength(const string s, int i, int j) {
    int length = 0;

    while (i >= 0 && j < s.length()) {
        if (s[i] == s[j]) {
            length += (i == j) ? 1 : 2;
        } else {
            break;
        }

        i--;
        j++;
    }

    return length;
}

int longestPalindrome(const string s) {
    int maxLength = 0;

    for (int i = 0; i < s.length(); i++) {
        int odd = findPalindromeLength(s, i, i);
        int even = findPalindromeLength(s, i, i + 1);
        maxLength = max(maxLength, max(odd, even));
    }

    return maxLength;
}

int main() {
    string str = "abccbacba";
    cout << "Longest Palindrome Length: " << longestPalindrome(str) << endl;
    return 0;
}`
    },
    {
        language: 'python',
        code: `def find_palindrome_length(s, i, j):
    length = 0

    while i >= 0 and j < len(s):
        if s[i] == s[j]:
            length += 1 if i == j else 2
        else:
            break
        
        i -= 1
        j += 1

    return length

def longest_palindrome(s):
    max_length = 0

    for i in range(len(s)):
        odd = find_palindrome_length(s, i, i)
        even = find_palindrome_length(s, i, i + 1)
        max_length = max(max_length, max(odd, even))

    return max_length

if __name__ == "__main__":
    string = "abccbacba"
    print("Longest Palindrome Length:", longest_palindrome(string))`
    },
    {
        language: 'java',
        code: `public class Test {
    private String s;

    public Test(String s) {
        this.s = s;
    }

    public int longestPalindrome() {
        int maxLength = 0;

        for(int i = 0; i < this.s.length(); i++) {
            int odd = findPalindromeLength(i, i);
            int even = findPalindromeLength(i, i + 1);
            maxLength = Math.max(maxLength, Math.max(odd, even));
        }

        return maxLength;
    }

    private int findPalindromeLength(int i, int j) {
        int length = 0;

        while(i >= 0 && j < this.s.length()) {
            if(this.s.charAt(i) == this.s.charAt(j)) {
                length += (i == j) ? 1 : 2;
            } else {
                break;
            }

            i--;
            j++;
        }

        return length;
    }
}`
    }
];

const drops = [
    "Tempo: O(n) → n è la lunghezza della stringa",
    "Complessità: O(1)"
];

const sottostringa_palindromica_piu_lunga: React.FC = () => {
    return <LearnBaseSection>
        <Title title="sottostringa palindroma più lunga" />
        <Section sectionTitle="descrizione">
            Come trovare la sottostringa <ExternalLink link="https://it.wikipedia.org/wiki/Palindromo" name="palindroma" blank={true} /> più lunga in una stringa di carratteri.
        </Section>
        <Section sectionTitle="Complessità">
            <List drops={drops} />
        </Section>
        <IDE codeData={codeData} output="6" />
        <Section />
    </LearnBaseSection>
};

export default sottostringa_palindromica_piu_lunga;

