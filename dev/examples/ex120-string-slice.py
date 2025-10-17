productCode = "ELEC-7283-AAB"

categoryCode = productCode[0:4]
catCode = productCode[:4]
rest = productCode[4:]
productNumber = productCode[5:9]
productCode = productCode[-3:] # last three characters

print(f"productCode = {productCode}")
print(f"categoryCode = {categoryCode}")
print(f"catCode = {catCode}")
print(f"productNumber = {productNumber}")
print(f"productCode = {productCode}")
print(f"rest = {rest}")
