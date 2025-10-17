import re
import tools as t

t.section('regex validation')
productCodes = ['AB-3827', 'PW-7772', 'A-2838', 'SK-283', 'DI=2387', 'zz-0000', 'AB-8828']
pattern = re.compile(r'^[A-Z]{2}-\d{4}$')

def is_valid_product_code(code):
    return bool(pattern.match(code))

for productCode in productCodes:
    if is_valid_product_code(productCode):
        print(f"{productCode} is valid")
    else:
        print(f"REJECT: {productCode} is NOT valid")

t.section('regex extraction')
sentence = "He told a *spurious* story about an *uncanny* incident that happened during a *tremendous* thunderstorm."
highlightedWords = re.findall(r"\*(\w+)\*", sentence)
print(highlightedWords) 