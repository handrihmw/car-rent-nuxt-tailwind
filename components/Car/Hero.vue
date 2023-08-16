<template>
  <header
    class="w-100 relative h-screen bg-[url('https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-bottom bg-no-repeat"
  >
    <div class="absolute z-10 flex h-full w-full items-center justify-center">
      <div class="w-1/2 text-center">
        <h1 class="mb-10 text-8xl text-white">Find your car</h1>
        <CarSearch />
      </div>
    </div>

    <div class="z-1 absolute h-full w-full bg-black opacity-50"></div>
  </header>
</template>
