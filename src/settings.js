// Cursor Settings Management
export const defaultCursorSettings = {
  enabled: true,
  showChain: true,
  chainLength: 12,
  showOrnament: true,
  showGlow: true,
  cursorSpeed: 0.22, // Smoothing factor
  chainFollowSpeed: 0.35, // How fast chain follows
  theme: 'gold', // gold, cyber, neon, minimal
};

const SETTINGS_KEY = 'hive-division-cursor-settings';

export function loadCursorSettings() {
  try {
    const saved = localStorage.getItem(SETTINGS_KEY);
    return saved ? { ...defaultCursorSettings, ...JSON.parse(saved) } : defaultCursorSettings;
  } catch (e) {
    console.warn('Failed to load cursor settings:', e);
    return defaultCursorSettings;
  }
}

export function saveCursorSettings(settings) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    window.dispatchEvent(new CustomEvent('cursorSettingsChanged', { detail: settings }));
  } catch (e) {
    console.warn('Failed to save cursor settings:', e);
  }
}

export function createSettingsPanel() {
  const settings = loadCursorSettings();
  
  const panel = document.createElement('div');
  panel.className = 'cursor-settings-panel';
  panel.setAttribute('aria-label', 'Cursor settings');
  
  panel.innerHTML = `
    <div class="settings-header">
      <h3>Cursor Settings</h3>
      <button class="settings-close" aria-label="Close settings">✕</button>
    </div>
    
    <div class="settings-content">
      <div class="settings-group">
        <label class="settings-toggle">
          <input type="checkbox" name="enabled" ${settings.enabled ? 'checked' : ''} />
          <span>Enable custom cursor</span>
        </label>
      </div>
      
      <div class="settings-group">
        <label class="settings-toggle">
          <input type="checkbox" name="showChain" ${settings.showChain ? 'checked' : ''} />
          <span>Show chain</span>
        </label>
      </div>
      
      <div class="settings-group">
        <label class="settings-range">
          <span>Chain length</span>
          <input type="range" name="chainLength" min="3" max="20" value="${settings.chainLength}" />
          <span class="range-value">${settings.chainLength}</span>
        </label>
      </div>
      
      <div class="settings-group">
        <label class="settings-toggle">
          <input type="checkbox" name="showOrnament" ${settings.showOrnament ? 'checked' : ''} />
          <span>Show ornament</span>
        </label>
      </div>
      
      <div class="settings-group">
        <label class="settings-toggle">
          <input type="checkbox" name="showGlow" ${settings.showGlow ? 'checked' : ''} />
          <span>Show glow effects</span>
        </label>
      </div>
      
      <div class="settings-group">
        <label class="settings-select">
          <span>Theme</span>
          <select name="theme">
            <option value="gold" ${settings.theme === 'gold' ? 'selected' : ''}>Gold (default)</option>
            <option value="cyber" ${settings.theme === 'cyber' ? 'selected' : ''}>Cyber Blue</option>
            <option value="neon" ${settings.theme === 'neon' ? 'selected' : ''}>Neon Purple</option>
            <option value="minimal" ${settings.theme === 'minimal' ? 'selected' : ''}>Minimal</option>
          </select>
        </label>
      </div>
      
      <div class="settings-group">
        <label class="settings-range">
          <span>Cursor smoothing</span>
          <input type="range" name="cursorSpeed" min="0.1" max="0.5" step="0.05" value="${settings.cursorSpeed}" />
          <span class="range-value">${(settings.cursorSpeed * 100).toFixed(0)}%</span>
        </label>
      </div>
      
      <div class="settings-group">
        <label class="settings-range">
          <span>Chain follow speed</span>
          <input type="range" name="chainFollowSpeed" min="0.1" max="0.6" step="0.05" value="${settings.chainFollowSpeed}" />
          <span class="range-value">${(settings.chainFollowSpeed * 100).toFixed(0)}%</span>
        </label>
      </div>
      
      <button class="settings-reset">Reset to defaults</button>
    </div>
  `;
  
  // Event listeners
  const closeBtn = panel.querySelector('.settings-close');
  const resetBtn = panel.querySelector('.settings-reset');
  const inputs = panel.querySelectorAll('input, select');
  const rangeValues = panel.querySelectorAll('.range-value');
  
  closeBtn.addEventListener('click', () => {
    panel.classList.remove('is-open');
  });
  
  resetBtn.addEventListener('click', () => {
    const defaults = defaultCursorSettings;
    Object.keys(defaults).forEach(key => {
      const input = panel.querySelector(`[name="${key}"]`);
      if (input) {
        if (input.type === 'checkbox') {
          input.checked = defaults[key];
        } else {
          input.value = defaults[key];
        }
      }
    });
    updateRangeValues();
    saveSettings();
  });
  
  inputs.forEach(input => {
    input.addEventListener('change', saveSettings);
    input.addEventListener('input', () => {
      updateRangeValues();
    });
  });
  
  function updateRangeValues() {
    inputs.forEach((input, i) => {
      if (input.type === 'range') {
        const valueDisplay = rangeValues[i - panel.querySelectorAll('input:not([type="range"])').length] || rangeValues[i];
        if (input.name === 'cursorSpeed' || input.name === 'chainFollowSpeed') {
          valueDisplay.textContent = (input.value * 100).toFixed(0) + '%';
        } else {
          valueDisplay.textContent = input.value;
        }
      }
    });
  }
  
  function saveSettings() {
    const newSettings = { ...settings };
    inputs.forEach(input => {
      if (input.type === 'checkbox') {
        newSettings[input.name] = input.checked;
      } else {
        const value = input.value;
        newSettings[input.name] = isNaN(value) ? value : parseFloat(value);
      }
    });
    saveCursorSettings(newSettings);
  }
  
  return panel;
}

export function toggleSettingsPanel() {
  let panel = document.querySelector('.cursor-settings-panel');
  if (!panel) {
    panel = createSettingsPanel();
    document.body.appendChild(panel);
  }
  panel.classList.toggle('is-open');
}
