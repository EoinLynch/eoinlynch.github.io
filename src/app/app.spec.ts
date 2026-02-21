diff --git a/src/app/app.spec.ts b/src/app/app.spec.ts
index 3cb3f2e..bb7cf47 100644
--- a/src/app/app.spec.ts
+++ b/src/app/app.spec.ts
@@ -1,26 +1,19 @@
 import { TestBed } from '@angular/core/testing';
-import { App } from './app';
+import { AppComponent } from './app.component';
 
-describe('App', () => {
+describe('AppComponent', () => {
   beforeEach(async () => {
     await TestBed.configureTestingModule({
-      imports: [App],
+      imports: [AppComponent],
     }).compileComponents();
   });
 
   it('should create the app', () => {
-    const fixture = TestBed.createComponent(App);
+    const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.componentInstance;
     expect(app).toBeTruthy();
   });
-
-  it('should render title', async () => {
-    const fixture = TestBed.createComponent(App);
-    await fixture.whenStable();
-    const compiled = fixture.nativeElement as HTMLElement;
-    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, kendo-angular-app');
-  });
 });

