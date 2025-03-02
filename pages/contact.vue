<template>
  <div class="w-full mx-auto h-screen flex flex-col items-center justify-center px-5 lg:px-10">
      <div class="w-full max-w-2xl bg-white border border-gray-500 rounded-lg text-black p-10 space-y-5">
          <h1 class="text-center text-2xl mb-10">Contact Us</h1>
          <div class="flex items-center gap-x-5">
            <Icon name="iconoir:phone-solid" class="text-3xl"  />
            <p class="text-lg font-bold">09123456789</p>
          </div>
          <div class="flex items-center gap-x-5">
            <Icon name="ion:location" class="text-4xl"/>
            <p class="text-lg font-bold">Central Philippines State University, Brgy.Camingawan Kabankalan City</p>
          </div>
          <div class="flex items-center gap-x-5">
            <Icon name="garden:email-fill-16" class="text-3xl"  />
            <p class="text-lg font-bold">rccitdepartment@gmail.com</p>
          </div>
          <a a href="https://www.facebook.com/share/1DxBg9HWHT/" target="_blank"  class="flex items-center gap-x-5">
            <Icon name="fe:facebook" class="text-3xl"  />
            <p class="text-lg font-bold">CPSU College of Computer Studies - Main Campus </p>
          </a>
      </div>
  </div>
</template>

<script setup>
const query = useRoute().query

const language = ref("cpp");
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

  if(query && query.language){
    language.value = query.language
    code.value = `class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World from RCC");
    }
}`
    editor.setValue(code.value);
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
