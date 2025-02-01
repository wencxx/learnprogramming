<template>
  <div class="w-full mx-auto h-full flex flex-col pt-[15dvh] px-5 lg:px-10">
    <div>
      <label for="language" class="block font-medium">Select Language:</label>
      <select id="language" v-model="language" class="border rounded p-2" @change="changeLanguage">
        <option value="java">Java</option>
        <option value="cpp">C++</option>
      </select>
    </div>

    <div class="flex flex-col lg:flex-row mt-5">
      <!-- code text area -->
      <div class="lg:w-1/2">
        <div class="flex justify-end w-full bg-gray-300 px-2 py-2 relative">
          <button v-if="loading"
            class="bg-blue-500 text-white px-4 py-2 rounded w-fit ml-auto flex items-center"
            :disabled="loading"
          >
            <Icon name='line-md:loading-loop' class="text-2xl"  />
          </button>
          <button v-else
            class="bg-blue-500 text-white px-4 py-2 rounded w-fit ml-auto"
            @click="runCode"
          >
            Run
          </button>
          <div class="absolute left-0 top-0 bg-white text-black h-full flex items-center justify-center px-4">
            <p class="font-semibold">main.{{ language }}</p>
          </div>
        </div>
        <textarea
          ref="codeInput"
          class="w-full border rounded p-2"
        ></textarea>
      </div>
      
      <!-- result -->
      <div class="lg:w-1/2 text-black h-[60dvh]">
          <div class="flex justify-between items-center w-full bg-gray-300 px-2 py-2">
            <h3 class="text-xl font-bold tracking-wide">Output</h3>
            <button
              class="bg-neutral-700 text-white px-4 py-2 rounded w-fit ml-auto"
              @click="result = ''"
            >
              Clear
            </button>
          </div>
          <div class="bg-white h-full p-5 border-l">
            <p>{{ result }}</p>
            <p v-if="result" class="mt-10">=== Execution Successfull ===</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const query = useRoute().query

const language = ref(query.language || "cpp");
const code = ref(`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World from RCC!" << endl;
    return 0;
}`);

const result = ref("");
const loading = ref(false);
const codeInput = ref(null);
let editor = null;

onMounted(() => {
  if (!editor && codeInput.value) {
    editor = CodeMirror.fromTextArea(codeInput.value, {
      lineNumbers: true,
      mode: language.value === "cpp" ? "text/x-c++src" : "text/x-java",
      theme: "darcula",
    });

    editor.setValue(code.value);

    editor.setSize(null, "60dvh");

    editor.on("change", () => {
      code.value = editor.getValue();
    });
  }
});


const runCode = async () => {
  loading.value = true;
  try {
    const response = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: language.value,
        version: "*",
        files: [{ name: "main", content: code.value }],
      }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    result.value = data.run.stdout || data.run.stderr || "No output.";
  } catch (error) {
    result.value = `Error: ${error.message}`;
  } finally {
    loading.value = false;
  }
};


const changeLanguage = () => {
  if(language.value === 'java') {
    code.value = `class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World from RCC");
    }
}`

  }else{
    code.value = `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World from RCC!" << endl;
    return 0;
}`
  }

  if (editor) {
    editor.setValue(code.value); 
    editor.setOption("mode", language.value === "cpp" ? "text/x-c++src" : "text/x-java");
  }
}
</script>

<style scoped>
textarea {
  font-family: monospace;
}
</style>
