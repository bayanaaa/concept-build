(function () {
  if (window.__conceptWidgetInitialized) return;
  window.__conceptWidgetInitialized = true;

  async function initAviaWidget() {
    var containers = document.querySelectorAll(".concept-widget");

    for (const container of containers) {
      if (container.querySelector("iframe")) continue;

      var clientId = container.getAttribute("data-client-id");

      if (!clientId) {
        console.error("Concept Widget: data-client-id is required");
        continue;
      }

      try {
        const attributionRes = await fetch(
          "https://beta.concept.kg/api/avia/api/widget/attribution/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ partner: clientId }),
          },
        );

        if (!attributionRes.ok) {
          const err = await attributionRes.json();
          console.error("Concept Widget:", err.detail);
          return;
        }

        const attributionData = await attributionRes.json();

        if (!attributionData.at) {
          throw new Error("Attribution token not received");
        }

        const consumeRes = await fetch(
          `https://beta.concept.kg/api/avia/api/attribution/consume/?at=${encodeURIComponent(attributionData.at)}`,
          { method: "GET" },
        );

        const consumeData = await consumeRes.json();
 
        if (!consumeData.ok) {
          console.error("Concept Widget: consume failed");
          return;
        }

        var iframe = document.createElement("iframe");
        iframe.src =
          "https://beta.concept.kg/concept-widget?clientId=" +
          encodeURIComponent(clientId);
        iframe.style.width = "100%";
        iframe.style.height = "600px";
        iframe.style.border = "none";

        container.appendChild(iframe);
      } catch (error) {
        console.error("Concept Widget error:", error);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAviaWidget);
  } else {
    initAviaWidget();
  }
})();