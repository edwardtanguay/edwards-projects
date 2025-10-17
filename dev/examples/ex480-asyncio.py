import asyncio
import time
import random

def function_synchronous(id: str):
	print("starting sync")
	time.sleep(random.uniform(1,5))
	print(f"sync #{id} finished")


async def function_asynchronous(id: str):
	print(f"starting async #{id}")
	await asyncio.sleep(random.uniform(1,5))
	print(f"sync #{id} finished")

async def main():
	funcs = [function_asynchronous(1), function_asynchronous(2), function_asynchronous(3)]
	await asyncio.gather(*funcs)

# ASYNC VERSION
asyncio.run(main())

# SYNC VERSION
# function_synchronous(1)
# function_synchronous(2)
