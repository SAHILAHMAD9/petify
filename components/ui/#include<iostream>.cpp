#include<iostream>
#include<string>
using namespace std;

bool detectCapitalUse(string word) {
        int count = 0;
        for(int i = 1;i<word.length();i++) {
           if(word[i] >= 'A' && word[i] <= 'Z') {
            count++;
           }
        }
        if(count != word.length()-1 || count != 0 ) {
            return false;
        }
        if(count == word.length() - 1 && (word[0] >= 'a' && word[0] <= 'z')) {
            return false;
        }
        return true;
    }

int main() {
    string s = "USA";
    int ans = detectCapitalUse(s);
    cout<<ans;
}